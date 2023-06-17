import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons'


interface buttonNewProps{
    size: number,
    action: () => void
}


export default function ButtonNew({size, action}:buttonNewProps) {
  return (
    <TouchableOpacity className='w-14 h-14 mt-[-28] items-center justify-center rounded-full bg-green' activeOpacity={0.6} onPress={action}>
        <Entypo name='plus' size={size} color={'#ece9e9'} />
    </TouchableOpacity>
  );
}
