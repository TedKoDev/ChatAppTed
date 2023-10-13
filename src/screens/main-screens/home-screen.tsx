import React from 'react'
import { Div, Text } from 'react-native-magnus'

import { useOnSnapshot } from '../../hooks'
import COLLECTIONS from '../../constants/collection-names'

const HomeScreen: React.FC = () => {
  useOnSnapshot(COLLECTIONS.MESSAGES, (snapshot) => {
    console.log('snapshot =', snapshot)
    console.log('snapshot.docs =')
    snapshot.docs.forEach((doc) => {
      console.log(doc.data())
    })
  })

  return (
    <Div flex={1} justifyContent="center" alignItems="center">
      <Text fontSize={20}>Home Screen</Text>
    </Div>
  )
}

export default HomeScreen
