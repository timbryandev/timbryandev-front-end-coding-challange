import { ReactNode } from 'react'
import { ModalState, PaginationState, User } from '../types'

export interface ProviderProps {
  children: ReactNode
}

export interface ContextState {
  users: User[] | [] | Error
  pagination: PaginationState
  modal: ModalState
}
