import React from 'react'
import { View } from 'react-native';
import { InfoMenssage } from '../../../components/info';
import { InputDeBusca } from '../../../components/InputDeBusca';

export function Inicio(){
    return(
        <View className='flex-1 bg-black'>
            <View className='items-center'>
                <InputDeBusca/>
            </View>
            <View className='flex-1 justify-center items-center'>
                <InfoMenssage Text0='Nenhuma Boleia disponivel' Text1='até ao momento...'/>
            </View>
        </View>
    )
}