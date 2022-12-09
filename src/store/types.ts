import { ReactNode } from 'react'
import { ModalState, User } from '../types'

export interface ProviderProps {
  children: ReactNode
}

export interface ContextState {
  users: User[] | []
  pagination: number
  modal: ModalState
}
