import  React from 'react'
import { View, Text } from 'react-native'

interface infoProps{
    Text0: string,
    Text1: string
}

export function InfoMenssage({ Text0, Text1 }:infoProps){
    return(
        <View className='items-center justify-center p-4'>
            <Text className='text-gray700 opacity-80 text-base'>{Text0}</Text>
            <Text className=' text-gray700 opacity-80 text-base'>{Text1}</Text>
        </View>
    ) 
}