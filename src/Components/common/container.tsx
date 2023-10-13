import React from 'react'
import { Div, DivProps } from 'react-native-magnus'

interface IContainer extends DivProps {}

export default function Container({ children, p = 'lg', ...rest }: IContainer) {
  return (
    <Div flex={1} p={p} {...rest}>
      {children}
    </Div>
  )
}
