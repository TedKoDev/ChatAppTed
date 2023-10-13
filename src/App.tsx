import React from 'react'
import AuthProvider from './context/auth-context'
import Navigator from './navigation/navigator'

export default function App() {
  // const [user, setUser] = useState<FirebaseAuthTypes.UserCredential | null>(null)

  return (
    <AuthProvider>
      <Navigator />
    </AuthProvider>
  )
}
