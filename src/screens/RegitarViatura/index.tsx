import React, { useState } from 'react';
import { View, TextInput, Text, ImageBackground,SafeAreaView , ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'

import { ButtonDone, ButtonBack } from '../../components/Buttons';
import { DeFaultTextInput } from "../../components/InputBase"

const imgBackground = require('../../../assets/Welcome.png')

export function RegistarViatura() {
    const [ {  }, setFormRegisterCar ] = useState({});

    const navigation = useNavigation()
    return (
        <ImageBackground className='flex-1 bg-green'  source={imgBackground} resizeMode={'cover'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView className='flex-1'>
                <KeyboardAwareScrollView className='flex-1'>
                        <StatusBar 
                            style='light'
                        />

                        <View className='ml-2 mt-12'>
                            <ButtonBack action={() => {}}/>
                        </View>
                        <View className='mx-5'>
                            <Text className='text-3xl text-white font-roboto700Bold'>Registar Viatura</Text>
                            <Text className='text-white500 text-xs mt-2'>Registe uma Viatura para poder participar nas BOLEIAS  </Text>
                            <Text className='text-white500 text-xs mb-4'>como condutor e faturar um KÚMBU!</Text>
                        </View> 

                        <View className='mx-5'> 
                            <DeFaultTextInput  placeholder={'Digite a Matricula'} />
                            <DeFaultTextInput placeholder={'Digite a Marca'} />
                            <DeFaultTextInput placeholder={'Digite o Modelo'} />
                            <DeFaultTextInput placeholder={'Informe o total de lugares(Lotação)'} keyboardType='numeric'/>  
                        </View> 

                        <View className='m-5'>
                            <ButtonDone wrapperStyle='w-full bg-greenLigth' description={'Concluir'} action={() => {}}/>
                        </View>
                        
                    </KeyboardAwareScrollView>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </ImageBackground>
    
  );
}