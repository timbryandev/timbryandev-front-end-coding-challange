export interface ModalState {
  actions?: Array<[string, () => unknown]>
  content: React.ReactNode | null
  title?: string
  visible: boolean
}

export interface User {
  id: number
  email: string
  firstName: string
  lastName: string
  avatar: string
}
