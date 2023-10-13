import React, { createContext, useState } from 'react'

export const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
})

interface IAuthProvider {
  children: JSX.Element
}

export default function AuthProvider({ children }: IAuthProvider) {
  const [isLoggedIn, setIsLoggedIn] = useState(false) // will control the state of navigator

  const login = () => setIsLoggedIn(true)
  const logout = () => setIsLoggedIn(false)

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>{children}</AuthContext.Provider>
  )
}
