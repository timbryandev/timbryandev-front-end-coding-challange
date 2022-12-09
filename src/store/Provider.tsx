import React, { useState } from 'react'
import Context, { defaultContextState } from './Context'
import { ProviderProps } from './types'

const Provider: React.FC<ProviderProps> = ({ children }) => {
  const [context, setContext] = useState(defaultContextState)

  const value = { context, setContext }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default Provider
