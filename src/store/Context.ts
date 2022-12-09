import React, { createContext } from 'react'
import { ContextState } from './types'

export const defaultContextState: ContextState = {
  users: [],
  pagination: {
    currentPage: 1,
    min: 1,
    max: Infinity
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
