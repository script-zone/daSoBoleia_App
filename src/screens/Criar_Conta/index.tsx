import React from 'react';
import { Dimensions ,View, Text, ImageBackground,SafeAreaView , ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { FormCriarConta } from '../../components/FormCriarConta';

import { ButtonBack } from '../../components/Buttons';

const imgBackground = require('../../../assets/Welcome.png')

export function CriarConta() {
    return (
        <ImageBackground className='flex-1 bg-green' source={imgBackground} resizeMode={'cover'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView className='flex-1'>
                    <SafeAreaView className='flex-1'>
                        <KeyboardAwareScrollView className='flex-1'>
                            <StatusBar 
                                style='light'
                            />
                            <View className='ml-2 mt-10'>
                                <ButtonBack action={() => {}}/>
                            </View>
                            <View className='mx-5'>
                                <Text className='text-3xl text-white font-roboto700Bold'>Criar Conta</Text>
                                <Text className='text-white500 text-xs mt-2'>Chegar aonde se quer nunca foi tão facil, registe-se e  </Text>
                                <Text className='text-white500 text-xs mb-4'>podes organizar e/ou se encrever em BOLEIAS!</Text>
                            </View>   

                            <View className='mx-5'>
                                <FormCriarConta/>    
                            </View> 

                        </KeyboardAwareScrollView>
                    </SafeAreaView>
                </ScrollView>
            </TouchableWithoutFeedback>
        </ImageBackground>
    
  );
}