import React from 'react'
import { Button, Div, Text } from 'react-native-magnus'
import { logout } from '../../services/firebase-handler'
import { FirebaseAuthTypes } from '@react-native-firebase/auth'

const SettingsScreen: React.FC<{
  user: FirebaseAuthTypes.UserCredential
  setUser: React.Dispatch<React.SetStateAction<FirebaseAuthTypes.UserCredential | null>>
}> = ({ user, setUser }) => (
  <Div flex={1} justifyContent="flex-start" alignItems="stretch">
    <Div mb={50} p={10} justifyContent="space-between" row>
      <Text fontSize={20}>UserName : {user.user.email}</Text>
      <Button
        onPress={() => {
          logout()
          setUser(null)
        }}
      >
        로그아웃
      </Button>
    </Div>
    <Div>
      <Text color="red">로그인 되었습니다 화면입니둥 </Text>
    </Div>
  </Div>
)

export default SettingsScreen
