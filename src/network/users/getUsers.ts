import { usersApi } from '../config'
import { User } from '../../types'
import camelcaseObject from '../../utils/camelcaseObject'

export const getUsers = async (page = 1): Promise<User[] | Error> => {
  const url = `${usersApi.root}/${usersApi.users}?page=${page}`
  try {
    const response = await fetch(url, {
      method: 'GET'
    })

    const json = await response.json()

    const users = camelcaseObject(json.data) as unknown as User[]

    return users
  } catch (err) {
    throw new Error('There was an issue retrieving user data')
  }
}
