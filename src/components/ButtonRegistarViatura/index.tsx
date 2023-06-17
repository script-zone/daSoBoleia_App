import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

interface buttonProps{
    name: String,
    action: () => void
}


export default function ButtonRegistar({name, action}:buttonProps) {
  return (
    <TouchableOpacity className='w-1/3 mr-1 h-12 items-center justify-center rounded-md bg-greenLigth shadow-sm shadow-indigo-500/40' activeOpacity={0.6} onPress={action}>
        <Text className='text-white font-semibold'>{name}</Text>
    </TouchableOpacity>
  );
}
