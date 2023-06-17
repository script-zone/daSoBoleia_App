import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface buttonProps{
  name: String,
  action: () => void
}


export default function ButtonCancelar({name, action}:buttonProps) {
  return (
    <TouchableOpacity className='w-1/3 h-12 items-center justify-center rounded-md bg-red shadow-sm shadow-indigo-500/40' activeOpacity={0.6} onPress={action}>
        <Text className='text-white font-semibold'>{name}</Text>
    </TouchableOpacity>
  );
}
