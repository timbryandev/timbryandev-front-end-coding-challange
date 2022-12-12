import { usersApi } from '../config'
import { User } from '../../types'

export const updateUser = async (user: User): Promise<User | Error> => {
  const { id, email, firstName, lastName, avatar } = user

  const url = `${usersApi.root}/${usersApi.users}/${id}`

  const data = {
    email,
    avatar,
    first_name: firstName,
    last_name: lastName
  }

  try {
    const response = await fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(data)
    })

    const json = await response.json()

    return json
  } catch (err) {
    throw new Error('There was an issue updating user data')
  }
}
