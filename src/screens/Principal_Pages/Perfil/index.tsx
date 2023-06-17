import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native';
import ButtonRegistar  from '../../../components/ButtonRegistarViatura';
import ButtonEditar  from '../../../components/ButtonEditar';
import { FormCriarConta } from '../../../components/FormCriarConta';


const logo = require('../../../../assets/user.png')

export function Perfil(){
    return(
        <ScrollView className='flex-1 bg-black'>
            <View className='flex-1 bg-black'>
                <View className='mt-7 items-center'>
                    <Image source={logo}/>
                    <Text className='text-base font-roboto700Bold mt-2 text-white'>bigShark666</Text>
                    <Text className='text-white500'>Condutor</Text>
                    <Text className='text-2xl font-roboto700Bold text-white500'>1 000 000kz</Text>
                </View>
                <View className='flex-row items-center justify-center'>
                    <ButtonRegistar name={'Registar Viatura'} action={() => {}}/>
                    <ButtonEditar action={() => {}}/>
                </View>

                <View className='flex-1 m-5'>
                </View>
            </View>
        </ScrollView>
    )
}