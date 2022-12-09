import { useContext, useEffect } from 'react'
import Context from '../store/Context'
import { ContextState } from '../store/types'
import { getUsers } from '../network/users/getUsers'

const useUsers = (): ContextState['users'] => {
  const { context, setContext } = useContext(Context)

  useEffect(() => {
    const fetchUsers = async (): Promise<void> => {
      const fetched = await getUsers(context.pagination.currentPage)
      setContext((prev: ContextState) => ({ ...prev, users: fetched }))
    }

    void fetchUsers()
  }, [context.pagination])

  return context.users
}

export default useUsers
