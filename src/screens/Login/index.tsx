import React,{ useState } from 'react';
import { View, Text, Pressable, ImageBackground, Image, TextInput, SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { FontAwesome } from '@expo/vector-icons';
import { useForm, Controller} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';


import { ButtonConnect } from '../../components/Buttons';
import { schema, inputLoginData } from '../../Datas/Uteis'
import MyError from '../../components/ErrorMessage';

const imgBackground = require('../../../assets/Welcome.png')
const logo = require('../../../assets/bigLogoLogin.png')


export function Login() {
    const navigation = useNavigation()
    
    const [{ passwordIsVisible }, setFormCreateAccount] = useState({passwordIsVisible: false,});
    const {control, setValue, handleSubmit, formState: {errors}} = useForm<inputLoginData>({
        resolver: yupResolver(schema)
      })

    const onSubmit = (data) => {
        if(data.email === '1' && data.password === '1'){
          navigation.navigate('principal');
        }else{
          alert('Acesso Negado');
          setValue('email', '')
          setValue('password','')
        }
    };

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
                    
                    
                    <View className='flex-1 rounded-t-3xl bg-white500 items-center justify-center p-9 opacity-95' >
                        <View className='items-center'>
                            <Text className='text-greenLigth font-bold  text-2xl'>Bem-Vindo de Volta</Text>
                            <Text className='text-greenLigth'>Conecte-se agora!</Text>
                        </View>

                        <View className='w-full items-center '>

                        <Controller
                            control={control}
                            name="email"
                            render={({ field:{onChange, onBlur, value}}) => (
                            <TextInput
                                className='w-full h-12 text-gray800 border-solid border-2 border-gray800 mt-6 rounded-md pl-5 focus:border-green'
                                placeholder='Email'
                                keyboardType='email-address'
                                placeholderTextColor = {'#706D6F'}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                            />
                            )}
                        />
                        {errors.email && <MyError erro={String(errors.email?.message)}/> }
                            
                        
                        <Controller
                            control={control}
                            name="password"
                            render={({ field:{onChange, onBlur, value}}) => (
                            <View className='w-full h-12 relative border-2 border-gray800 mt-7 rounded-md flex-row focus:border-green'>
                                <TextInput 
                                    className='w-10/12 h-full text-gray800 text-xs pl-5 '
                                    placeholder={'Password'}
                                    secureTextEntry={passwordIsVisible ? false : true}
                                    placeholderTextColor = {'#706D6F'}
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                />
                                <Pressable className='items-center absolute top-0 right-0 justify-center w-[15%] h-full rounded-br-md ' onPress={() => setFormCreateAccount(props => ({...props, passwordIsVisible: !passwordIsVisible}))}>
                                    {passwordIsVisible ? (<FontAwesome name="eye" size={22} color={'#5B5B60'} />) : (<FontAwesome name="eye-slash" size={22} color={'#5B5B60'} />)}
                                </Pressable>
                            </View>
                            )}
                        />
                        {errors.password && <MyError erro={String(errors.password?.message)}/> }

                            
                        </View>
                        <View className='w-full my-6'>
                            <Text className='text-greenLigth text-right'>Esqueceu a sua palavra-Passe?</Text>
                        </View>

                        <View className='w-full items-center '>
                            <ButtonConnect wrapperStyle='w-full bg-greenLigth' description={'Conecte-se'} action={handleSubmit(onSubmit)} />
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