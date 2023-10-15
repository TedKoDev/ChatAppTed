import React from 'react'
import AuthProvider from './context/auth-context'
import Navigator from './navigation/navigator'

export default function App() {
  return (
    <AuthProvider>
      <Navigator />
    </AuthProvider>
  )
}
