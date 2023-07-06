import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, ScrollView } from "react-native";

import { ButtonEdit, ButtonRegister } from "../../../components/Buttons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { APIRouterGeneral, utenteProps } from "../../../Datas/Uteis";
import axios from "axios";

const logoImg = require("../../../../assets/user.png");

export function Perfil() {
  const navigation = useNavigation();
  const [userCodigo, setUserCodigo] = useState(0);
  const [utente, setUtente] = useState<utenteProps>({
    CODIGO: 0,
    NOME: "",
    SOBRENOME: "",
    USERNAME: "",
    EMAIL: "",
    DATA_NASCIMENTO: "",
    SENHA: "",
    CATEGORIA: "",
    N_IDENTIFICACAO: "",
    TIPO_UTENTE: "",
    ESTADO: "",
    CURSO: "",
    SALDO: 0,
  });

  const getItemsInLocalStoreged = async () => {
    const itemStoreged = await AsyncStorage.getItem("@dasoboleia:UserData");
    const previous = itemStoreged ? JSON.parse(itemStoreged) : {};
    setUserCodigo(previous.codigo);
  };

  useEffect(() => {
    getItemsInLocalStoreged();
    axios
      .get(`${APIRouterGeneral}/api/utente/${userCodigo}`)
      .then((response) => {
        const dados = response.data;
        console.log(dados);
        setUtente(dados);
      })
      .catch((error) => {
        console.log(error.response?.data?.message);
      })
      .finally(() => {});
  });

  return (
    <ScrollView className="flex-1 bg-black">
      <View className="flex-1 bg-black">
        <View className="mt-7 items-center">
          <Image source={logoImg} />
          <Text className="text-base font-roboto700Bold mt-2 text-white">
            {utente.USERNAME}
          </Text>
          <Text className="text-white500">{utente.TIPO_UTENTE}</Text>
          <Text className="text-3xl font-roboto700Bold text-white500">
            {String(utente.SALDO)}kz
          </Text>
        </View>
        <View className="flex-row items-center justify-center">
          <ButtonRegister
            wrapperStyle="w-1/3 mr-1 bg-greenLigth"
            description={"Registar Viatura"}
            action={() => navigation.navigate("registarViatura")}
          />
          <ButtonEdit
            wrapperStyle="w-15 mr-1 p-2 bg-greenLigth"
            action={() => {}}
          />
        </View>

        <View className="flex-1 m-5"></View>
      </View>
    </ScrollView>
  );
}
