import React, { useEffect, useState } from "react";
import { View, TextInput, Pressable, ActivityIndicator } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import DateTimePicker from "@react-native-community/datetimepicker";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

import {
  APIRouterGeneral,
  Curso,
  Tipo_de_Boleia,
  localProps,
} from "../../../Datas/Uteis";
import { ButtonDone } from "../../../components/Buttons";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

export function OrganizarBoleia() {
  const [locais, setLocais] = useState<localProps[]>([]);
  const [
    {
      data,
      dataBoleia,
      horaBoleia,
      mostrarCalendario,
      mostrarHoras,
      local_Origem,
      local_Destino,
      custo_boleia,
      qtd_Passageiro,
      tipo_Boleia,
      userCodigo,
      listKey,
      isLoading,
    },
    setFormOrganizarBoleia,
  ] = useState({
    data: new Date(),
    dataBoleia: "",
    horaBoleia: "",
    mostrarCalendario: false,
    mostrarHoras: false,
    local_Origem: "",
    local_Destino: "",
    custo_boleia: 0,
    qtd_Passageiro: 0,
    tipo_Boleia: "",
    userCodigo: 0,
    listKey: [],
    isLoading: false,
  });

  const getItemsInLocalStoreged = async () => {
    const itemStoreged = await AsyncStorage.getItem("@dasoboleia:UserData");
    const previous = itemStoreged ? JSON.parse(itemStoreged) : {};
    setFormOrganizarBoleia((prev) => ({
      ...prev,
      userCodigo: previous.codigo,
    }));
  };

  const alterarData = () => {
    setFormOrganizarBoleia((prev) => ({ ...prev, mostrarCalendario: true }));
  };

  const alterarHOra = () => {
    setFormOrganizarBoleia((prev) => ({ ...prev, mostrarHoras: true }));
  };

  const onChange = (_, selectedDate) => {
    console.log(userCodigo);
    setFormOrganizarBoleia((prev) => ({
      ...prev,
      mostrarCalendario: false,
      data: selectedDate,
    }));
    let tmp = new Date(selectedDate);
    let data = tmp.getFullYear() + "-" + tmp.getMonth() + "-" + tmp.getDay();
    setFormOrganizarBoleia((prev) => ({ ...prev, dataBoleia: data }));
  };

  const onChangeHora = (_, selectedHora) => {
    setFormOrganizarBoleia((prev) => ({ ...prev, mostrarHoras: false }));
    let tmp = new Date(selectedHora);
    let hora = tmp.getHours() + ":" + tmp.getMinutes() + ":" + tmp.getSeconds();
    setFormOrganizarBoleia((prev) => ({ ...prev, horaBoleia: hora }));
  };

  function getKey(listLocais: any[], nomeLocal: string) {
    let chave = 0;
    listLocais.forEach((element) => {
      const { key, value } = element;
      if (value === nomeLocal) {
        chave = key;
      }
    });

    return chave;
  }

  useEffect(() => {
    getItemsInLocalStoreged();
    axios
      .get(`${APIRouterGeneral}/api/especific/local`)
      .then((response) => {
        // Store Values in Temporary Array
        let newArray = response.data.map((item) => {
          return { key: item.CODIGO, value: item.NOME };
        });
        //Set Data Variable
        setFormOrganizarBoleia((prev) => ({ ...prev, listKey: newArray }));
        setLocais(newArray);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userCodigo]);

  const handleSubmit = () => {
    setFormOrganizarBoleia((prev) => ({ ...prev, isLoading: true }));
    let takeKeyLocalOrigin = getKey(listKey, local_Origem);
    let takeKeyLocalDestiny = getKey(listKey, local_Destino);

    axios
      .post(`${APIRouterGeneral}/api/boleia/create`, {
        codigo_utente: userCodigo,
        lotacao: qtd_Passageiro,
        custo: custo_boleia,
        data_hora: dataBoleia + " " + horaBoleia,
        tipo: tipo_Boleia,
        origem: takeKeyLocalOrigin,
        destino: takeKeyLocalDestiny,
        t_freq: "Semanal",
        termino: "15-06-2023",
      })
      .then((response) => {
        const confirm = response.data[0].confirm;
        console.log(confirm);
        if (confirm === 1) {
          Toast.show({
            type: "success",
            text1: "SUCCESS",
            text2: "Boleia criada com sucesso|",
          });
        } else {
          Toast.show({
            type: "info",
            text1: "AVISO",
            text2: "Sem dinheiro suficiente na conta!",
          });
        }
      })
      .catch((error) => {
        console.log(error);
        Toast.show({
          type: "error",
          text1: "ERRO",
          text2: "Erro ao criar a boleia!",
        });
      })
      .finally(() => {
        setFormOrganizarBoleia((prev) => ({ ...prev, isLoading: false }));
      });
  };

  return (
    <View className="flex-1 m-4 justify-center items-center mt-5">
      <View className="w-full">
        <SelectList
          setSelected={(val) =>
            setFormOrganizarBoleia((prev) => ({ ...prev, local_Origem: val }))
          }
          data={locais}
          save="value"
          placeholder="Seleccione o local de Origem"
          search={false}
          fontFamily="Roboto_400Regular"
          boxStyles={{
            backgroundColor: "#202024",
            marginTop: 4,
            borderRadius: 5,
            borderColor: "#202024",
          }}
          dropdownStyles={{
            backgroundColor: "#202024",
            borderColor: "#202024",
          }}
          dropdownTextStyles={{ color: "#5A5A61" }}
          inputStyles={{ color: "#5A5A61", fontSize: 13 }}
        />

        <SelectList
          setSelected={(val) =>
            setFormOrganizarBoleia((prev) => ({ ...prev, local_Destino: val }))
          }
          data={locais}
          save="value"
          placeholder="Seleccione o local de Destino"
          search={false}
          fontFamily="Roboto_400Regular"
          boxStyles={{
            backgroundColor: "#202024",
            marginBottom: 4,
            marginTop: 8,
            borderRadius: 5,
            borderColor: "#202024",
          }}
          dropdownStyles={{
            backgroundColor: "#202024",
            borderColor: "#202024",
          }}
          dropdownTextStyles={{ color: "#5A5A61" }}
          inputStyles={{ color: "#5A5A61", fontSize: 13 }}
        />

        <TextInput
          className="w-full h-12 text-gray700 text-xs rounded-md my-1 pl-5 bg-gray500"
          placeholder={"Informe o custo da Boleia"}
          placeholderTextColor={"#5B5B60"}
          keyboardType="numeric"
          onChangeText={(text) =>
            setFormOrganizarBoleia((prev) => ({
              ...prev,
              custo_boleia: Number(text),
            }))
          }
        />

        <TextInput
          className="w-full h-12 text-gray700 text-xs rounded-md my-1 pl-5 bg-gray500"
          placeholder={"Informe a Quantidade de Passageiros"}
          placeholderTextColor={"#5B5B60"}
          keyboardType="numeric"
          onChangeText={(text) =>
            setFormOrganizarBoleia((prev) => ({
              ...prev,
              qtd_Passageiro: Number(text),
            }))
          }
        />

        <SelectList
          setSelected={(val) =>
            setFormOrganizarBoleia((prev) => ({ ...prev, tipo_Boleia: val }))
          }
          data={Tipo_de_Boleia}
          save="value"
          placeholder="Seleccione o tipo de Boleia"
          search={false}
          fontFamily="Roboto_400Regular"
          boxStyles={{
            backgroundColor: "#202024",
            marginBottom: 4,
            marginTop: 4,
            borderRadius: 5,
            borderColor: "#202024",
          }}
          dropdownStyles={{
            backgroundColor: "#202024",
            borderColor: "#202024",
          }}
          dropdownTextStyles={{ color: "#5A5A61" }}
          inputStyles={{ color: "#5A5A61", fontSize: 13 }}
        />

        <View className="w-full h-12 relative rounded-md my-1 bg-black flex-row">
          <TextInput
            className="w-10/12 h-full text-gray700 text-xs rounded-tl-md rounded-bl-md pl-5 bg-gray500"
            placeholder={"Informe a Data da Boleia"}
            placeholderTextColor={"#5B5B60"}
            editable={false}
            value={dataBoleia}
          />
          <Pressable
            className="items-center absolute top-0 right-0 justify-center w-[15%] h-full rounded-tr-md rounded-br-md bg-gray500"
            onPress={alterarData}
          >
            <FontAwesome name="calendar" size={24} color={"#5B5B60"} />
          </Pressable>
        </View>

        {mostrarCalendario ? (
          <DateTimePicker
            mode="date"
            display="spinner"
            value={data}
            onChange={onChange}
          />
        ) : (
          <></>
        )}

        <View className="w-full h-12 relative rounded-md my-1 bg-black flex-row">
          <TextInput
            className="w-10/12 h-full text-gray700 text-xs rounded-tl-md rounded-bl-md pl-5 bg-gray500"
            placeholder={"Informe a hora da Boleia"}
            placeholderTextColor={"#5B5B60"}
            editable={false}
            value={String(horaBoleia)}
          />
          <Pressable
            className="items-center absolute top-0 right-0 justify-center w-[15%] h-full rounded-tr-md rounded-br-md bg-gray500"
            onPress={alterarHOra}
          >
            <MaterialCommunityIcons
              name="clock-time-three"
              size={24}
              color={"#5B5B60"}
            />
          </Pressable>
        </View>
        {mostrarHoras ? (
          <DateTimePicker
            mode="time"
            display="spinner"
            value={data}
            onChange={onChangeHora}
          />
        ) : (
          <></>
        )}
      </View>
      <View className="w-full  mt-4">
        <ButtonDone
          wrapperStyle="w-full h-12 bg-greenLigth"
          description={isLoading ? <ActivityIndicator /> : "Confirmar"}
          action={handleSubmit}
        />
      </View>
    </View>
  );
}
