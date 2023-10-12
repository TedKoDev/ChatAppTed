// React와 useState 훅을 가져옵니다.
import React, { useState, useEffect } from 'react'
// react-native-magnus로부터 몇몇 컴포넌트들을 가져옵니다.
import { Button, Div, Input, Text } from 'react-native-magnus'
// firebase 관련 서비스 함수들을 가져옵니다.
import {
  checkIfUser,
  createUser,
  loginWithEmailAndPassword,
  logout,
  registerUser,
} from './services/firebase-handler'
// react-native의 Alert 컴포넌트를 가져옵니다.
import { Alert } from 'react-native'
// Firebase authentication의 타입들을 가져옵니다.
import { FirebaseAuthTypes } from '@react-native-firebase/auth'

// React Navigation의 타입들을 가져옵니다.
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// React Navigation의 Stack Navigator를 생성합니다.
const Stack = createNativeStackNavigator()

// 로그인 컴포넌트의 props 인터페이스를 정의합니다.
interface ILogin {
  setUser: React.Dispatch<React.SetStateAction<FirebaseAuthTypes.UserCredential | null>>
}

// 로그인 컴포넌트를 정의합니다.
const Login: React.FC<ILogin> = ({ setUser }) => {
  // email과 password의 상태를 관리합니다.
  // state variables :
  const [email, setEmail] = useState<string>(''),
    [password, setPassword] = useState<string>(''),
    [confirmPassword, setConfirmPassword] = useState<string>(''),
    [formType, setFormType] = useState<'login' | 'signup'>('login')

  useEffect(() => {
    console.log('hello world')
    return () => {
      // cleanup
    }
  }, [email, password])

  // 회원 가입 또는 로그인을 처리하는 함수입니다.
  const signupOrRegisterHandler = async () => {
    // email이나 password가 비어 있으면 경고를 출력합니다.
    if (email === '' || password === '') {
      return Alert.alert('fill inputs')
    }

    // 사용자가 이미 있는지 확인합니다.
    const checkIf = await checkIfUser(email)

    // 사용자가 없으면 회원 가입을 시도합니다.
    if (!checkIf.length) {
      try {
        const register = await registerUser(email, password)
        if (register) {
          createUser(email)
          setUser(register)
        }
      } catch (error) {
        console.log('error =', error)
      }
    } else {
      // 이미 사용자가 있으면 로그인을 시도합니다.
      const login = await loginWithEmailAndPassword(email, password)
      if (login) {
        setUser(login)
        return
      }
      Alert.alert('Wrong Credential...')
    }
  }

  // 로그인 UI를 반환합니다.
  return (
    <Div flex={1} justifyContent="center" alignItems="center">
      <Text>Email</Text>
      <Input
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        m="sm"
        onBlur={async () => {
          const isUser = await checkIfUser(email)
          if (!isUser.length) setFormType('signup')
          console.log('isUser =', isUser)
        }}
      />
      <Text>Password</Text>
      <Input
        value={password}
        onChangeText={setPassword}
        m="sm"
        autoCapitalize="none"
        secureTextEntry
        onBlur={async () => {
          const isUser = await checkIfUser(email)
          if (!isUser.length) setFormType('signup')
          else setFormType('login')
        }}
      />
      {formType === 'signup' && (
        <>
          <Text>Confirm Password</Text>
          <Input
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            m="sm"
            autoCapitalize="none"
            secureTextEntry
            onBlur={() => {
              if (password !== confirmPassword) {
                Alert.alert('Passwords do not match!')
              }
            }}
          />
        </>
      )}
      <Div mt={10} row justifyContent="space-between">
        <Button onPress={signupOrRegisterHandler}>signup</Button>
        <Div mx="xl" />
        <Button onPress={signupOrRegisterHandler}>login</Button>
      </Div>
    </Div>
  )
}

// 메인 App 컴포넌트를 정의합니다.
export default function App() {
  // 현재 로그인한 사용자의 상태를 관리합니다.
  const [user, setUser] = useState<FirebaseAuthTypes.UserCredential | null>(null)

  // 사용자가 로그인하지 않았으면 로그인 컴포넌트를 보여주고, 로그인했으면 사용자 정보를 보여줍니다.
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {!user ? (
          <Stack.Screen name="Login">
            {(props) => <Login {...props} setUser={setUser} />}
          </Stack.Screen>
        ) : (
          <Stack.Screen name="LoggedIn">
            {(props) => <LoggedInScreen {...props} user={user} setUser={setUser} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const LoggedInScreen: React.FC<{
  user: FirebaseAuthTypes.UserCredential
  setUser: React.Dispatch<React.SetStateAction<FirebaseAuthTypes.UserCredential | null>>
}> = ({ setUser }) => {
  return (
    <Div flex={1} justifyContent="center" alignItems="center" bg="blue">
      <Div>
        <Text color="red">로그인 되었습니다 화면입니둥 </Text>
        <Button
          onPress={() => {
            logout()
            setUser(null)
          }}
        >
          로그아웃
        </Button>
      </Div>
    </Div>
  )
}
