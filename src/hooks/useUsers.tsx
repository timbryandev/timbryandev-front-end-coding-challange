import { useContext, useEffect } from 'react'
import Context from '../store/Context'
import { ContextState } from '../store/types'
import { getUsers } from '../network/users/getUsers'

const useUsers = (): ContextState['users'] => {
  // @ts-expect-error
  const { context, setContext } = useContext(Context)

  useEffect(() => {
    const fetchUsers = async (): Promise<void> => {
      const fetched = await getUsers()
      setContext((prev: ContextState) => ({ ...prev, users: fetched }))
    }

    void fetchUsers()
  }, [])

  return context.users
}

export default useUsers
