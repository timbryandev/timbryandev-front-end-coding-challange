import { useContext, useEffect } from 'react'
import Context from '../store/Context'
import { ContextState } from '../store/types'
import { getUsers } from '../network/users/getUsers'

const useUsers = (): ContextState['users'] => {
  const { context, setContext } = useContext(Context)

  useEffect(() => {
    const fetchUsers = async (): Promise<void> => {
      // @ts-expect-error
      const [users, totalPages] = await getUsers(context.pagination.currentPage)
      setContext((prev: ContextState) => ({
        ...prev,
        users,
        pagination: { ...prev.pagination, max: totalPages }
      }))
    }

    void fetchUsers()
  }, [context.pagination.currentPage])

  return context.users
}

export default useUsers
