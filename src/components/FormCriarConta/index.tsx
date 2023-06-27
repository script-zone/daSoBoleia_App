import React, { useState } from "react";
import axios from "axios";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SelectList } from "react-native-dropdown-select-list";
import { View, Text, Pressable, TextInput } from "react-native";
import Checkbox from "expo-checkbox";
import DateTimePicker from "@react-native-community/datetimepicker";

import { ButtonCancel, ButtonDone, ButtonNext } from "../Buttons";
import { DeFaultTextInput } from "../InputBase";

import { Curso, categories } from '../../Datas/Uteis'

export function FormCriarConta() {
  const { navigate } = useNavigation();
  const [
    {
      bornDate,
      category,
      hasCar,
      initialDate,
      passwordIsVisible,
      showCalender,
      name,
      email,
      identificationNumber,
      password,
    },
    setFormCreateAccount,
  ] = useState({
    category: "",
    passwordIsVisible: false,
    showCalender: false,
    initialDate: new Date(),
    bornDate: "",
    hasCar: false,
    name: "",
    email: "",
    identificationNumber: "",
    password: "",
    username: ''
  });

  const onChangeDate = () => {
    setFormCreateAccount((prev) => ({ ...prev, showCalender: true }));
  };

  const onChange = (_, initialDate) => {
    setFormCreateAccount((prev) => ({
      ...prev,
      initialDate,
      showCalender: false,
      bornDate: initialDate.toLocaleDateString(),
    }));
  };

  const handleSubmit = () => {
    axios
      .post("https://dasoboleia.up.railway.app/api/auth/login", {
        nome: name,
        sobrenome: "Doe",
        email,
        senha: password,
        data_nascimento: bornDate,
        categoria: category,
        n_identificacao: identificationNumber,
      })
      .then((response) => {
        // Handle success
        console.log(response.data);
        // Navigate to the next screen or perform any other actions
        navigate('login')
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };

  return (
    <View>
      <DeFaultTextInput
        placeholder={"Digite o seu nome"}
        onChangeText={(text) => setFormCreateAccount((prev) => ({ ...prev, name: text }))}
      />

      <View className='w-full h-12 relative rounded-md my-1 flex-row'>
        <TextInput
          className='w-10/12 h-full text-gray700 text-xs rounded-tl-md rounded-bl-md pl-5 bg-white500'
          placeholderTextColor={"#5B5B60"}
          placeholder={"Informe a Data de Nascimento"}
          editable={false}
          value={bornDate}
        />
        <Pressable
          className='items-center absolute top-0 right-0 justify-center w-[15%] h-full rounded-tr-md rounded-br-md bg-white500'
          onPress={onChangeDate}
        >
          <FontAwesome name='calendar' size={24} color={"#5B5B60"} />
        </Pressable>
      </View>

      {showCalender ? (
        <DateTimePicker mode='date' display='spinner' value={initialDate} onChange={onChange} />
      ) : null}

      <DeFaultTextInput
        placeholder={"Digite o seu nome de usuário"}
        onChangeText={(text) => setFormCreateAccount((prev) => ({ ...prev, username: text }))}
      />
      <DeFaultTextInput
        placeholder={"Digite o seu E-mail"}
        keyboardType='email-address'
        onChangeText={(text) => setFormCreateAccount((prev) => ({ ...prev, email: text }))}
      />
      <DeFaultTextInput
        placeholder={"Digite o seu Número de identificação"}
        onChangeText={(text) => setFormCreateAccount((prev) => ({ ...prev, identificationNumber: text }))}
      />

      <SelectList
        setSelected={(selected) => setFormCreateAccount((prev) => ({ ...prev, category: selected }))}
        data={categories}
        save='value'
        placeholder='Informe a Categoria'
        search={false}
        fontFamily='Roboto_400Regular'
        boxStyles={{ backgroundColor: "#E8E8E8", marginTop: 5, borderRadius: 5 }}
        dropdownStyles={{ backgroundColor: "#E8E8E8" }}
        inputStyles={{ color: "#5A5A61", fontSize: 13 }}
      />

      {category === "Aluno(a)" ? (
        <SelectList
          setSelected={(selected) => { }}
          data={Curso}
          save='value'
          placeholder='Informe o Curso'
          search={false}
          fontFamily='Roboto_400Regular'
          boxStyles={{ backgroundColor: "#E8E8E8", marginTop: 7, borderRadius: 5 }}
          dropdownStyles={{ backgroundColor: "#E8E8E8" }}
          inputStyles={{ color: "#5A5A61", fontSize: 13 }}
        />
      ) : null}

      <View className='w-full h-12 relative rounded-md my-1 mt-2 bg-white500 flex-row'>
        <TextInput
          className='w-10/12 h-full text-gray700 text-xs rounded-tl-md rounded-bl-md pl-5 bg-white500'
          placeholder={"Digite a Palavra-Passe"}
          placeholderTextColor={"#5B5B60"}
          secureTextEntry={passwordIsVisible ? false : true}
          onChangeText={(text) => setFormCreateAccount((prev) => ({ ...prev, password: text }))}
        />
        <Pressable
          className='items-center absolute top-0 right-0 justify-center w-[15%] h-full rounded-tr-md rounded-br-md bg-white500'
          onPress={() =>
            setFormCreateAccount((prev) => ({
              ...prev,
              passwordIsVisible: !prev.passwordIsVisible,
            }))
          }
        >
          {passwordIsVisible ? (
            <FontAwesome name='eye' size={22} color={"#5B5B60"} />
          ) : (
            <FontAwesome name='eye-slash' size={22} color={"#5B5B60"} />
          )}
        </Pressable>
      </View>

      <View className='w-full'>
        <View className='w-full h-10 items-center flex-row mt-1'>
          <Checkbox
            className='bg-white500'
            value={hasCar}
            onValueChange={() => setFormCreateAccount((prev) => ({ ...prev, hasCar: !prev.hasCar }))}
          />
          <Text className='text-white ml-2'>Tenho uma viatura</Text>
        </View>

        <View className='flex relative flex-row  mt-1'>
          <ButtonCancel wrapperStyle="w-1/3 bg-red" description={"Cancelar"} action={() => { }} />
          {hasCar ? (
            <ButtonNext
              wrapperStyle="w-1/3 h-12 absolute top-0 right-0 bg-greenLigth"
              description={"Seguinte"}
              action={() => navigate("registarViatura")}
            />
          ) : (
            <ButtonDone wrapperStyle="w-1/3 h-12 absolute top-0 right-0 bg-greenLigth" description={"Concluir"} action={handleSubmit} />
          )}
        </View>
      </View>
    </View>
  );
}
