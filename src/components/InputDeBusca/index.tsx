import React from "react";
import { View, TextInput, Text } from "react-native";

interface inputDeBuscaProps {
  totalBoleias: number;
}

export function InputDeBusca({ totalBoleias }: inputDeBuscaProps) {
  return (
    <View className="w-full mb-2">
      <View className="flex-row">
        <Text className="text-xs text-gray700 opacity-80">
          Informe o nome do Local:{" "}
        </Text>
      </View>
      <View className="w-full h-16 items-center justify-center">
        <TextInput
          className="w-full h-12 text-gray700 text-xs rounded-md my-6 pl-5 bg-gray500"
          placeholderTextColor={"#5B5B60"}
          placeholder="Ex: Marginal ou Campus Universitário"
        />
      </View>
      <View className="flex-row items-center mt-1">
        <Text className="text-sm font-roboto700Bold text-gray700 opacity-80">
          Resultados{" "}
        </Text>
        <Text className="text-xs mt-1 text-gray700 opacity-80">
          ( {String(totalBoleias)} boleias )
        </Text>
      </View>
    </View>
  );
}
