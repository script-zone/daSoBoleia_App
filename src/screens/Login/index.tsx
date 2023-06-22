import React,{ useState } from 'react';
import { View, Text, Pressable, ImageBackground, Image, TextInput, SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { FontAwesome } from '@expo/vector-icons';

import { ButtonConnect } from '../../components/Buttons';

const imgBackground = require('../../../assets/Welcome.png')
const logo = require('../../../assets/bigLogoLogin.png')

export function Login() {
    const navigation = useNavigation()
    const [{ passwordIsVisible }, setFormCreateAccount] = useState({passwordIsVisible: false,});

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView className='flex-1 h-full'>
            <KeyboardAwareScrollView className='flex-1'>
                <ImageBackground className='flex-1 bg-green'  source={imgBackground} resizeMode={'cover'}>
                    <StatusBar 
                        style='light'
                    />
                    <View className='h-1/5 mt-24 mb-12 justify-center items-center'>
                        <Image source={logo}/>
                    </View>
                    
                    
                    <View className='flex-1 rounded-t-3xl bg-white500 items-center justify-center p-8 opacity-95' >
                        <View className='items-center'>
                            <Text className='text-greenLigth font-bold  text-2xl'>Bem-Vindo de Volta</Text>
                            <Text className='text-greenLigth'>Conecte-se agora!</Text>
                        </View>

                        <View className='w-full items-center '>
                            <TextInput
                                className='w-full h-12 text-gray800 border-solid border-2 border-gray800 rounded-md my-6 pl-5 focus:border-green'
                                placeholder='Email'
                                keyboardType='email-address'
                            />

                            <View className='w-full h-12 relative border-2 border-gray800 rounded-md flex-row focus:border-green'>
                                <TextInput 
                                    className='w-10/12 h-full text-gray800 text-xs pl-5 '
                                    placeholder={'Digite a Palavra-Passe'}
                                    secureTextEntry={passwordIsVisible ? false : true}
                                />
                                <Pressable className='items-center absolute top-0 right-0 justify-center w-[15%] h-full rounded-br-md ' onPress={() => setFormCreateAccount(props => ({...props, passwordIsVisible: !passwordIsVisible}))}>
                                    {passwordIsVisible ? (<FontAwesome name="eye" size={22} color={'#5B5B60'} />) : (<FontAwesome name="eye-slash" size={22} color={'#5B5B60'} />)}
                                </Pressable>
                            </View>
                        </View>
                        <View className='w-full my-6'>
                            <Text className='text-greenLigth text-right'>Esqueceu a sua palavra-Passe?</Text>
                        </View>

                        <View className='w-full items-center '>
                            <ButtonConnect wrapperStyle='w-full bg-greenLigth' description={'Conecte-se'} action={() => navigation.navigate('principal')} />
                            <View className='flex flex-row justify-center my-6'>
                                <Text className='text-greenLigth text-xs'>Novo em dá só Boleia? </Text>
                                <Text className='text-blue text-xs' onPress={() => navigation.navigate('criarConta')}>Inscreva-se aqui!</Text>
                            </View>
                        </View>
                    </View>
                    
                </ImageBackground>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    </TouchableWithoutFeedback>
    
  );
}