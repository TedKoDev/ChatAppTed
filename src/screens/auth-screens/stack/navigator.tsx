import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { AuthScreen, ForgotCredentialScreen } from '../'
import AUTH_ROUTES from './routes'

const Stack = createNativeStackNavigator()

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={AUTH_ROUTES.LOGIN} component={AuthScreen} />
      <Stack.Screen name={AUTH_ROUTES.FORGOT_CREDENTIAL} component={ForgotCredentialScreen} />
    </Stack.Navigator>
  )
}
