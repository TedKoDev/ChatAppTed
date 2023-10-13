import React, { useState, useEffect } from 'react'
import { Button, Div, Input, Text } from 'react-native-magnus'
import { Alert } from 'react-native'
import {
  checkIfUser,
  createUser,
  loginWithEmailAndPassword,
  registerUser,
} from '../services/firebase-handler'
import { FirebaseAuthTypes } from '@react-native-firebase/auth'

interface ILogin {
  setUser: React.Dispatch<React.SetStateAction<FirebaseAuthTypes.UserCredential | null>>
}

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

export default Login
