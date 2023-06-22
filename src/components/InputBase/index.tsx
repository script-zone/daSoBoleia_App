import {TextInput, TextInputProps} from 'react-native'

export const DeFaultTextInput = (props: TextInputProps) => {
    return (
      <TextInput
        className='w-full h-12 text-gray700 text-xs rounded-md my-1 pl-5 bg-white500'
        placeholderTextColor={"#5B5B60"}
        {...props}
      />
    );
  };