import { ReactNode } from 'react'
import { User } from '../types'

export interface ProviderProps {
  children: ReactNode
}

export interface ContextState {
  users: User[] | []
  pagination: number
}
