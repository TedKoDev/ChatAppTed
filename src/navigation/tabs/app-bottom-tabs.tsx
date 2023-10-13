import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-magnus'

import { HomeScreen, ProfileScreen, SettingsScreen } from '../../screens/main-screens'
import TAB_ROUTES from './routes'

const Tab = createBottomTabNavigator()

export default function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={TAB_ROUTES.HOME}
        component={HomeScreen}
        options={{
          lazy: true,
          tabBarIcon: () => <Icon name="home" fontFamily="FontAwesome" />,
          tabBarLabel: '홈',
        }}
      />
      <Tab.Screen name={TAB_ROUTES.PROFILE} component={ProfileScreen} />
      <Tab.Screen name={TAB_ROUTES.SETTINGS} component={SettingsScreen} />
    </Tab.Navigator>
  )
}
