import React from 'react';
import { View, TextInput, Text, ImageBackground,SafeAreaView , ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import ButtonBack from '../../components/ButtonBack';
import StyledButton from '../../components/ButtonConectar';

const imgBackground = require('../../../assets/Welcome.png')

export function RegistarViatura() {

    const navigation = useNavigation()
    return (
        <ImageBackground className='flex-1 bg-green'  source={imgBackground} resizeMode={'cover'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView className='flex-1'>
            <KeyboardAwareScrollView className='flex-1'>
                    <StatusBar 
                        style='light'
                    />

                    <View className='ml-5 mt-12'>
                        <ButtonBack action={() => {}}/>
                    </View>
                    <View className='mx-5'>
                        <Text className='text-3xl text-white font-roboto700Bold'>Registar Viatura</Text>
                        <Text className='text-white500 text-xs mt-2'>Registe uma Viatura para poder participar nas BOLEIAS  </Text>
                        <Text className='text-white500 text-xs mb-4'>como condutor e faturar um KÚMBU!</Text>
                    </View> 

                    <View className='mx-5'> 
                        <TextInput 
                            className='w-full h-12 text-gray700 text-xs rounded-md my-1 pl-5 bg-white500'
                            placeholder={'Digite a Matricula'}
                            placeholderTextColor={'#5B5B60'}
                        />

                        <TextInput 
                            className='w-full h-12 text-gray700 text-xs rounded-md my-1 pl-5 bg-white500'
                            placeholder={'Digite a Marca'}
                            placeholderTextColor={'#5B5B60'}
                        />

                        <TextInput 
                            className='w-full h-12 text-gray700 text-xs rounded-md my-1 pl-5 bg-white500'
                            placeholder={'Digite o Modelo'}
                            placeholderTextColor={'#5B5B60'}
                        />

                        <TextInput 
                            className='w-full h-12 text-gray700 text-xs rounded-md my-1 pl-5 bg-white500'
                            placeholder={'Informe o total de lugares(Lotação)'}
                            placeholderTextColor={'#5B5B60'}
                            keyboardType='numeric'
                        />  
                    </View> 

                    <View className='m-5'>
                        <StyledButton name={'Concluir'} action={() => {}}/>
                    </View>
                    
                </KeyboardAwareScrollView>
            </SafeAreaView>
        </TouchableWithoutFeedback>
        </ImageBackground>
    
  );
}