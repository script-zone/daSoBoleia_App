import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


interface buttonBackProps{
    action: () => void
}


export default function ButtonBack({action}:buttonBackProps) {
  return (
    <TouchableOpacity className='w-14 h-14 justify-center rounded-full' activeOpacity={0.6} onPress={action}>
        <MaterialIcons name="arrow-back-ios" size={24} color={'#ece9e9'} />
    </TouchableOpacity>
  );
}
