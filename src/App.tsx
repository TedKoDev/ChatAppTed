import React, { useState } from 'react'
import Login from './Components/Login'
import MainScreen from './Components/MainScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FirebaseAuthTypes } from '@react-native-firebase/auth'

const Stack = createNativeStackNavigator()

export default function App() {
  const [user, setUser] = useState<FirebaseAuthTypes.UserCredential | null>(null)

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {!user ? (
          <Stack.Screen name="Login">
            {(props) => <Login setUser={setUser} {...props} />}
          </Stack.Screen>
        ) : (
          <Stack.Screen name="Ted Chat APP">
            {(props) => <MainScreen user={user} setUser={setUser} {...props} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
