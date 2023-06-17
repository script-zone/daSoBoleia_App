import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons'

interface buttonProps{
    action: () => void
}


export default function ButtonEditar({ action }:buttonProps) {
  return (
    <TouchableOpacity className='w-15 mr-1 h-12 p-2  items-center justify-center rounded-md bg-greenLigth shadow-sm shadow-indigo-500/40' activeOpacity={0.6} onPress={action}>
        <Entypo name='edit' size={20} color={'#FFFF'}/>
    </TouchableOpacity>
  );
}
