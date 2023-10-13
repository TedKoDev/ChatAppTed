import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FirebaseAuthTypes } from '@react-native-firebase/auth'

import HomeScreen from '../screens/main-screens/home-screen'
import ProfileScreen from '../screens/main-screens/profile-screen'
import SettingsScreen from '../screens/main-screens/settings-screen'

const Tab = createBottomTabNavigator()

const MainScreen: React.FC<{
  user: FirebaseAuthTypes.UserCredential
  setUser: React.Dispatch<React.SetStateAction<FirebaseAuthTypes.UserCredential | null>>
}> = ({ user, setUser }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings">
        {(props) => <SettingsScreen {...props} user={user} setUser={setUser} />}
      </Tab.Screen>
    </Tab.Navigator>
  )
}

export default MainScreen
