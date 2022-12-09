import { usersApi } from '../config'
import { User } from '../../types'
import camelcaseObject from '../../utils/camelcaseObject'

export const getUsers = async (page = 1): Promise<[User[], number] | Error> => {
  const url = `${usersApi.root}/${usersApi.users}?page=${page}`
  try {
    const response = await fetch(url, {
      method: 'GET'
    })

    const json = await response.json()
    const users = json.data.map(camelcaseObject) as unknown as User[]

    return [users, json.total_pages]
  } catch (err) {
    throw new Error('There was an issue retrieving user data')
  }
}
