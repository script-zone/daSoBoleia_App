import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { boleiaPropsData } from "../../Datas/Uteis";

export function Boleia({ item, onPress }: boleiaPropsData) {
  return (
    <TouchableOpacity
      className="w-full h-16 text-xs rounded-md my-1 p-2 bg-gray500"
      onPress={onPress}
      activeOpacity={0.6}
    >
      <View className="flex-1 flex-row">
        <Text className="text-gray700 text-base">Trajeto: </Text>
        <Text className="text-gray700 text-base">
          De {item.ORIGEM} para {item.DESTINO}
        </Text>
      </View>
      <View className="flex-1 flex-row">
        <Text className="text-gray700 right-0 absolute text-base ">
          Custo: {String(item.CUSTO_BOLEIA)}
        </Text>
        <Text className="text-gray700 text-base items-">
          Lotação: {String(item.QTD_PASSAGEIRO)} Lugares
        </Text>
      </View>
    </TouchableOpacity>
  );
}
