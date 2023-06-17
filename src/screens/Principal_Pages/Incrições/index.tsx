import React from 'react'
import { View } from 'react-native';
import { InfoMenssage } from '../../../components/info';
import { InputDeBusca } from '../../../components/InputDeBusca';

export function Inscricoes(){
    return(
        <View className='flex-1 bg-black'>
            <View className='items-center'>
                <InputDeBusca/>
            </View>
            <View className='flex-1 justify-center items-center bg-black'>
                <InfoMenssage Text0='Ainda não se Inscreveste em nehuma' Text1='Boleia até ao momento...'/>
            </View>
        </View>
    )
}