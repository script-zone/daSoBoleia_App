import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styled } from 'nativewind'

interface buttonProps{
    name: String,
    action: () => void
}


function Button({name, action}:buttonProps) {
  return (
    <TouchableOpacity className='w-full h-12 p-4  items-center justify-center rounded-md bg-greenLigth shadow-sm shadow-indigo-500/40' activeOpacity={0.6} onPress={action}>
        <Text className='text-white font-semibold'>{name}</Text>
    </TouchableOpacity>
  );
}

const StyledButton = styled(Button)

export default StyledButton;
