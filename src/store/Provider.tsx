import React, { useState } from 'react'
import Context from './Context'
import { ContextState, ProviderProps } from './types'

export const defaultContextState: ContextState = {
  users: [],
  pagination: 1
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
  const [context, setContext] = useState(defaultContextState)

  const value = { context, setContext }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default Provider
