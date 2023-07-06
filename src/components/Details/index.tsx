import axios from "axios";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { APIRouterGeneral, boleiaProps } from "../../Datas/Uteis";
import { ButtonDone } from "../Buttons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

interface detailsProps {
  cod: Number;
}
export function DetailsTodasBoleias({ cod }: detailsProps) {
  const [userCodigo, setUserCodigo] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [boleia, setBoleia] = useState<boleiaProps>({
    CODIGO: 0,
    CODIGO_UTENTE: 0,
    CUSTO_BOLEIA: 0,
    DATA_BOLEIA: "",
    DESTINO: "",
    ESTADO: "",
    LOCAL_DESTINO: 0,
    LOCAL_ORIGEM: 0,
    ORIGEM: "",
    QTD_PASSAGEIRO: 0,
    TIPO_BOLEIA: 0,
  });

  const getItemsInLocalStoreged = async () => {
    const itemStoreged = await AsyncStorage.getItem("@dasoboleia:UserData");
    const previous = itemStoreged ? JSON.parse(itemStoreged) : {};
    setUserCodigo(previous.codigo);
  };

  useEffect(() => {
    axios
      .get(`${APIRouterGeneral}/api/boleia/ride/${cod}`)
      .then((response) => {
        const dados = response.data;
        setBoleia(dados[0]);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  });

  function increver() {
    getItemsInLocalStoreged();
    setIsLoading(true);
    axios
      .post(`${APIRouterGeneral}/api/utente/record/${userCodigo}/${cod}`)
      .then((response) => {
        const confirm = response.data;
        if (confirm) {
          Toast.show({
            type: "success",
            text1: "SUCESSO",
            text2: `Inscrição Concluida!`,
          });
        } else {
          Toast.show({
            type: "info",
            text1: "AVISO",
            text2: "Inscrição Negada!",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  return (
    <View className="m-4">
      <Text className="text-white text-lg mt-4">
        Trajecto: De {boleia.ORIGEM} para {boleia.DESTINO}
      </Text>
      <View className="my-1">
        <Text className="text-white text-lg ">
          Tipo da Boleia: {String(boleia.TIPO_BOLEIA)}
        </Text>
        <Text className="text-white text-lg absolute right-0">
          Lotação: {String(boleia.QTD_PASSAGEIRO)}
        </Text>
      </View>
      <View className="my-1">
        <Text className="text-white text-lg ">
          Data: {String(boleia.DATA_BOLEIA)}
        </Text>
        <Text className="text-white text-lg absolute right-0">
          Custo: {String(boleia.CUSTO_BOLEIA)}kz
        </Text>
      </View>
      <View>
        <Text className="text-white text-lg">
          Lugares Disponiveis: em construção
        </Text>
      </View>
      <View className="w-full mt-6">
        <ButtonDone
          wrapperStyle="w-full bg-greenLigth"
          description={isLoading ? <ActivityIndicator /> : "Se inscrever"}
          action={() => increver()}
        />
      </View>
    </View>
  );
}

export function DetailsMinhasBoleias({ cod }: detailsProps) {
  const [boleia, setBoleia] = useState<boleiaProps>({
    CODIGO: 0,
    CODIGO_UTENTE: 0,
    CUSTO_BOLEIA: 0,
    DATA_BOLEIA: "",
    DESTINO: "",
    ESTADO: "",
    LOCAL_DESTINO: 0,
    LOCAL_ORIGEM: 0,
    ORIGEM: "",
    QTD_PASSAGEIRO: 0,
    TIPO_BOLEIA: 0,
  });

  useEffect(() => {
    axios
      .get(`${APIRouterGeneral}/api/boleia/ride/${cod}`)
      .then((response) => {
        const dados = response.data[0];
        console.log("Resposta:", dados);
        setBoleia(dados);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <View className="m-4">
      <Text className="text-white text-lg mt-4">
        Trajecto: De {boleia.ORIGEM} para {boleia.DESTINO}
      </Text>
      <View className="my-1">
        <Text className="text-white text-lg ">
          Tipo da Boleia: {String(boleia.TIPO_BOLEIA)}
        </Text>
        <Text className="text-white text-lg absolute right-0">
          Lotação: {String(boleia.QTD_PASSAGEIRO)}
        </Text>
      </View>
      <View className="my-1">
        <Text className="text-white text-lg ">
          Data: {String(boleia.DATA_BOLEIA)}
        </Text>
        <Text className="text-white text-lg absolute right-0">
          Custo: {String(boleia.CUSTO_BOLEIA)}kz
        </Text>
      </View>
      <View>
        <Text className="text-white text-lg">
          Lugares Disponiveis: em construção
        </Text>
      </View>
      <View className="w-full mt-6">
        <ButtonDone
          wrapperStyle="w-full bg-red"
          description={"Cancelar"}
          action={() => {}}
        />
      </View>
    </View>
  );
}

export function DetailsMinhasInscricoes({ cod }: detailsProps) {
  const [boleia, setBoleia] = useState<boleiaProps>({
    CODIGO: 0,
    CODIGO_UTENTE: 0,
    CUSTO_BOLEIA: 0,
    DATA_BOLEIA: "",
    DESTINO: "",
    ESTADO: "",
    LOCAL_DESTINO: 0,
    LOCAL_ORIGEM: 0,
    ORIGEM: "",
    QTD_PASSAGEIRO: 0,
    TIPO_BOLEIA: 0,
  });

  useEffect(() => {
    axios
      .get(`${APIRouterGeneral}/api/boleia/ride/${cod}`)
      .then((response) => {
        const dados = response.data[0];
        console.log("Resposta:", dados);
        setBoleia(dados);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [boleia.CODIGO]);
  return (
    <View className="m-4">
      <Text className="text-white text-lg mt-4">
        Trajecto: De {boleia.ORIGEM} para {boleia.DESTINO}
      </Text>
      <View className="my-1">
        <Text className="text-white text-lg ">
          Tipo da Boleia: {String(boleia.TIPO_BOLEIA)}
        </Text>
        <Text className="text-white text-lg absolute right-0">
          Lotação: {String(boleia.QTD_PASSAGEIRO)}
        </Text>
      </View>
      <View className="my-1">
        <Text className="text-white text-lg ">
          Data: {String(boleia.DATA_BOLEIA)}
        </Text>
        <Text className="text-white text-lg absolute right-0">
          Custo: {String(boleia.CUSTO_BOLEIA)}kz
        </Text>
      </View>
      <View>
        <Text className="text-white text-lg">
          Lugares Disponiveis: em construção
        </Text>
      </View>
      <View className="w-full mt-6">
        <ButtonDone
          wrapperStyle="w-full bg-greenLigth"
          description={"Se inscrever"}
          action={() => {}}
        />
      </View>
    </View>
  );
}
