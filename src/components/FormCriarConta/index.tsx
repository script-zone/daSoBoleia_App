import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SelectList } from "react-native-dropdown-select-list";
import { View, Text, Pressable, TextInput} from "react-native";
import Checkbox from "expo-checkbox";
import DateTimePicker from "@react-native-community/datetimepicker";

import { ButtonCancel, ButtonDone, ButtonNext } from "../Buttons";
import { DeFaultTextInput } from "../InputBase"

import { Curso, categories } from '../../Datas/Uteis'



export function FormCriarConta() {
  const { navigate } = useNavigation();
  const [
    { bornDate, category, hasCar, initialDate, passwordIsVisible, showCalender },
    setFormCreateAccount,
  ] = useState({
    category: "",
    passwordIsVisible: false,
    showCalender: false,
    initialDate: new Date(),
    bornDate: "",
    hasCar: false,
  });

  const onChangeDate = () => {
    setFormCreateAccount(props => ({ ...props, showCalender: true }));
  };

  const onChange = (_, initialDate) => {
    setFormCreateAccount(props => ({
      ...props,
      initialDate,
      showCalender: false,
      bornDate: initialDate.toLocaleDateString(),
    }));
  };

  return (
    <View>
      <DeFaultTextInput placeholder={"Digite o seu nome"} />

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

      <DeFaultTextInput placeholder={"Digite o seu nome de usuário"} />
      <DeFaultTextInput placeholder={"Digite o seu E-mail"} keyboardType='email-address' />
      <DeFaultTextInput placeholder={"Digite o seu Número de identificação"} />

      <SelectList
        setSelected={category => setFormCreateAccount(props => ({ ...props, category }))}
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
          setSelected={val => {}}
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
        />
        <Pressable
          className='items-center absolute top-0 right-0 justify-center w-[15%] h-full rounded-tr-md rounded-br-md bg-white500'
          onPress={() =>
            setFormCreateAccount(props => ({
              ...props,
              passwordIsVisible: !props.passwordIsVisible,
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
            onValueChange={() => setFormCreateAccount(props => ({ ...props, hasCar: !hasCar }))}
          />
          <Text className='text-white ml-2'>Tenho uma viatura</Text>
        </View>

        <View className='flex relative flex-row  mt-1'>
          <ButtonCancel wrapperStyle="w-1/3 bg-red" description={"Cancelar"} action={() => {}} />
          {hasCar ? (
            <ButtonNext wrapperStyle="w-1/3 h-12 absolute top-0 right-0 bg-greenLigth" description={"Seguinte"} action={() => navigate("registarViatura")} />
          ) : (
            <ButtonDone wrapperStyle="w-1/3 h-12 absolute top-0 right-0 bg-greenLigth" description={"Concluir"} action={() => {}} />
          )}
        </View>
      </View>
    </View>
  );
}