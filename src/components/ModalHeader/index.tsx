import React from "react";
import { Text, View } from "react-native";

interface propsModalHeader{
    titulo: string
}

export function ModalHeader({ titulo }:propsModalHeader){
    return(
        <View className="w-full h-16 items-center bg-greenLigth rounded-t-3xl">
            <Text className="text-lg text-white font-roboto500Medium mt-8">{titulo}</Text>
        </View>
    )
}