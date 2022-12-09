export interface ModalState {
  content: React.ReactNode | null
  title?: string
  visible: boolean
}

export interface PaginationState {
  currentPage: number
  min: number
  max: number
}

export interface User {
  id: number
  email: string
  firstName: string
  lastName: string
  avatar: string
}
