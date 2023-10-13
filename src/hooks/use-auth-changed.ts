import { useEffect } from 'react'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'

export default function useAuthChanged(
  authCallback: (user: FirebaseAuthTypes.User | null) => void,
) {
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(authCallback)
    return () => unsubscribe()
  }, [])
}
