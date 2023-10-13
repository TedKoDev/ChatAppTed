import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { AuthStackParamList } from '../navigation/params'

type navigationPropType = NativeStackNavigationProp<AuthStackParamList>

export default function useTypedNavigation() {
  return useNavigation<navigationPropType>()
}
