/* eslint-disable */
import React, { createContext, useState, useContext } from 'react'

const AuthContext = createContext<{
  isAuthenticated?: boolean
  setIsAuthenticated?: Function
}>({})

interface AuthProviderProps {
  children: React.ReactNode
}
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const { Provider } = AuthContext

  {
    setTimeout(() => {
      setIsAuthenticated(true)
    }, 3000)
  }

  return <Provider value={{ isAuthenticated }}>{children}</Provider>
}

export const useAuthContext = () => useContext(AuthContext)
