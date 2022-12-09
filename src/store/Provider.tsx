import React, { ReactNode, useState } from 'react'
import Context from './Context'
import { User } from '../types'

export interface IProps {
  children: ReactNode
}

const Provider: React.FC<IProps> = ({ children }) => {
  const [context, setContext] = useState({
    users: [] as User[],
    pagination: 1
  })

  const value = { context, setContext }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default Provider
