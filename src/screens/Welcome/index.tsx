import React from 'react';
import { View, Text, ImageBackground, Image  } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'

import { ButtonConnect } from "../../components/Buttons";

const imgBackground = require('../../../assets/Welcome.png')
const logo = require('../../../assets/bigLogoLogin.png')

export function WelcomeScreen() {

  const navigation = useNavigation()
  
  return (
    <ImageBackground className='flex-1 bg-green'  source={imgBackground} resizeMode={'cover'}>
      <StatusBar 
        style='light'
      />

      <View className='flex-1 justify-center items-center'>
        <Image source={logo}/>
      </View>

      <View className='w-full p-8'>
        <View className='w-full h-12 items-center justify-center' >
          <ButtonConnect wrapperStyle='w-full bg-greenLigth' description={'Conecte-se'} action={() => navigation.navigate('login')}/>
        </View>
        <View className='flex flex-row justify-center mt-2'>
          <Text className='text-white text-xs'>Novo em dá só Boleia? </Text>
          <Text className='text-blue text-xs' onPress={() => navigation.navigate('criarConta')}>Inscreva-se aqui!</Text>
        </View>
      </View>
    </ImageBackground>
  );
}