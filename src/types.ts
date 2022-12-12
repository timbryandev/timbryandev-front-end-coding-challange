export interface ModalState {
  content: React.ReactNode | null
  title?: string
  visible: boolean
}

export interface PaginationState {
  firstPage: number
  page: number
  perPage: number
  total: number
  totalPages: number
}

export type PaginationApiData = Omit<PaginationState, 'firstPage'>

export interface User {
  id: number
  email: string
  firstName: string
  lastName: string
  avatar: string
}
