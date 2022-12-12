import { useContext, useEffect } from 'react'
import Context from '../store/Context'
import { ContextState } from '../store/types'
import { getUsers } from '../network/users/getUsers'

const useUsers = (): ContextState['users'] => {
  const { context, setContext } = useContext(Context)

  useEffect(() => {
    const fetchUsers = async (): Promise<void> => {
      // @ts-expect-error
      const [users, pagination] = await getUsers(context.pagination.page)
      setContext((prev: ContextState) => ({
        ...prev,
        users,
        pagination: { ...prev.pagination, ...pagination }
      }))
    }

    void fetchUsers()
  }, [context.pagination.page])

  return context.users
}

export default useUsers
