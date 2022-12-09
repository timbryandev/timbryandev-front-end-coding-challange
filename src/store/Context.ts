import React, { createContext } from 'react'
import { ContextState } from './types'

export const defaultContextState: ContextState = {
  users: [],
  pagination: 1,
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
