import React from 'react'
import { Text } from 'react-native'

type errorProp = {
  erro: string;
}

export default function MyError({ erro }:errorProp) {
  return  <Text className='mt-1  text-red700 items-start'>{erro}</Text>
}