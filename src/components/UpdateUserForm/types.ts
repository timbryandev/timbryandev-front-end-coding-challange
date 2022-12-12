import { User } from '../../types'

export interface UpdateUserFormProps {
  onSuccess: () => void
  user: User
}
