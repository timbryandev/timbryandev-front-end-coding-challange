import { usersApi } from '../config'
import { PaginationApiData, User } from '../../types'
import camelcaseObject from '../../utils/camelcaseObject'

export const getUsers = async (page = 1): Promise<[User[], PaginationApiData] | Error> => {
  const url = `${usersApi.root}/${usersApi.users}?page=${page}`
  try {
    const response = await fetch(url, {
      method: 'GET'
    })

    const json = await response.json()
    const users = json.data.map(camelcaseObject) as unknown as User[]
    const pagination: PaginationApiData = {
      page: json.page,
      perPage: json.per_page,
      total: json.total,
      totalPages: json.total_pages
    }

    return [users, pagination]
  } catch (err) {
    throw new Error('There was an issue retrieving user data')
  }
}
