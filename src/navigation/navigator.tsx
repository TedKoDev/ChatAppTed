import React, { useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import AuthStack from '../screens/auth-screens/stack/navigator'
import BottomTabs from './tabs/app-bottom-tabs'
import { useAuthContext } from '../context/use-auth-context'
import Config from '../config'
import { Div } from 'react-native-magnus'

export default function Navigator() {
  // state variables
  const [isReady, setIsReady] = useState(false)

  const { isLoggedIn, login } = useAuthContext()

  useEffect(() => {
    // knock knock is anyone there???
    const isThereUser = async () => {
      const user = await Config.getUser()
      if (user) login()
      console.log('user =', user)
      setIsReady(true)
    }
    isThereUser()
  })

  if (!isReady)
    return (
      <Div flex={1} alignItems="center" justifyContent="center">
        <ActivityIndicator size="large" />
      </Div>
    )

  return <NavigationContainer>{!isLoggedIn ? <AuthStack /> : <BottomTabs />}</NavigationContainer>
}
