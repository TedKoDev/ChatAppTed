import React, { useState } from 'react'
import { ActivityIndicator } from 'react-native'
import { Div } from 'react-native-magnus'
import { NavigationContainer } from '@react-navigation/native'

import AuthStack from '../screens/auth-screens/stack/navigator'
import BottomTabs from './tabs/app-bottom-tabs'

import { useAuthContext } from '../context/use-auth-context'
import Config from '../config'
import { useAuthChanged } from '../hooks'

export default function Navigator() {
  // state variables
  const [isReady, setIsReady] = useState(false)

  const { isLoggedIn, login, logout } = useAuthContext()

  useAuthChanged(async (user) => {
    try {
      console.log('navigator: user =', user)
      if (user) {
        const storageUser = await Config.getUser()
        if (storageUser) {
          console.log('update user')
        } else {
          console.log('create new user')
          await Config.storeUser(user)
        }
        console.log('someone is logged in')
        login()
        return
      } else {
        console.log('no one is logged in or user is logging out')
        logout()
      }
    } catch (error) {
      console.log('gracefully handle error in onAuthStateChanged here')
    } finally {
      setIsReady(true)
    }
  })

  // useEffect(() => {
  //   // knock knock is anyone there???
  //   const isThereUser = async () => {
  //     const user = await Config.getUser()
  //     if (user) login()
  //     console.log('user =', user)
  //     setIsReady(true)
  //   }
  //   isThereUser()
  // })

  if (!isReady)
    return (
      <Div flex={1} alignItems="center" justifyContent="center">
        <ActivityIndicator size="large" />
      </Div>
    )

  return <NavigationContainer>{!isLoggedIn ? <AuthStack /> : <BottomTabs />}</NavigationContainer>
}

/***
 *
 * $php_code       = include('php_code.php');
 * $php_user       = $php_code['user'];
 * $GET            = $REQUEST['GET'];
 * $params         = $GET['params'];
 *
 * $prepareExecute = prepare({
 * 'query'         => 'SELECT * FROM users WHERE id = ?',
 * 'types'         => 'i',
 * })
 *
 * $result         = execute($prepareExecute, $params);
 */
