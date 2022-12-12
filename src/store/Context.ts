import React, { createContext } from 'react'
import { ContextState } from './types'

export const defaultContextState: ContextState = {
  users: [],
  pagination: {
    firstPage: 1,
    page: 1,
    perPage: 6,
    total: Infinity,
    totalPages: Infinity
  },
  modal: {
    content: undefined,
    title: undefined,
    visible: false
  }
}

const context: ContextState = defaultContextState
const setContext: React.Dispatch<React.SetStateAction<ContextState>> = () => {}

const Context = createContext({
  context,
  setContext
})

export default Context
