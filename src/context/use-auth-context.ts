import { useContext } from 'react'

import { AuthContext } from './auth-context'

export const useAuthContext = () => {
  const context = useContext(AuthContext)

  const { isLoggedIn, login, logout } = context

  if (context === undefined) {
    throw new Error('useAuthContext must be used within a AuthProvider')
  }

  return {
    isLoggedIn,
    login,
    logout,
  }
}
