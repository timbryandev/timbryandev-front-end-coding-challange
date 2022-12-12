import { usersApi } from '../config'
import { ApiData, PaginationApiData, User } from '../../types'
import camelcaseObject from '../../utils/camelcaseObject'

async function fetchData (page: number): Promise<[User[], PaginationApiData]> {
  const url = `${usersApi.root}/${usersApi.users}?page=${page}`

  const response = await fetch(url, {
    method: 'GET'
  })

  const json: Object = await response.json()
  const apiData = camelcaseObject(json) as ApiData
  const users = apiData.data.map(camelcaseObject) as User[]
  const pagination: PaginationApiData = {
    page: apiData.page,
    perPage: apiData.perPage,
    total: apiData.total,
    totalPages: apiData.totalPages
  }

  return [users, pagination]
}

export const getUsers = async (
  page = 1
): Promise<[User[], PaginationApiData] | Error> => {
  try {
    const [users, pagination] = await fetchData(page)
    return [users, pagination]
  } catch (err) {
    throw new Error('There was an issue retrieving user data')
  }
}
