import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation, StackActions } from "@react-navigation/native";
import { SelectList } from "react-native-dropdown-select-list";
import { View, ActivityIndicator, Pressable, TextInput } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import { ButtonDone } from "../Buttons";
import { DeFaultTextInput } from "../InputBase";

import { APIRouterGeneral, Curso, categories } from "../../Datas/Uteis";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function FormCriarConta() {
  const Navigation = useNavigation();
  const [
    {
      bornDate,
      category,
      curso,
      isLoading,
      initialDate,
      passwordIsVisible,
      showCalender,
      name,
      sobreNome,
      emailUser,
      identificationNumber,
      password,
      userName,
    },
    setFormCreateAccount,
  ] = useState({
    category: "",
    passwordIsVisible: false,
    showCalender: false,
    initialDate: new Date(),
    bornDate: "",
    isLoading: false,
    name: "",
    sobreNome: "",
    emailUser: "",
    identificationNumber: "",
    password: "",
    userName: "",
    curso: "",
  });

  const onChangeDate = () => {
    setFormCreateAccount((prev) => ({ ...prev, showCalender: true }));
  };

  async function setStoreUseData(value: object) {
    await AsyncStorage.setItem("@dasoboleia:UserData", JSON.stringify(value));
  }

  function getFullDate(date: Date) {
    const now = new Date(date);

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  const onChange = (_, selectedDate) => {
    setFormCreateAccount((prev) => ({
      ...prev,
      initialDate: selectedDate,
      showCalender: false,
    }));

    let data = getFullDate(selectedDate);
    setFormCreateAccount((previos) => ({ ...previos, bornDate: data }));
  };

  const handleSubmit = () => {
    setFormCreateAccount((previos) => ({ ...previos, isLoading: true }));

    fetch(`${APIRouterGeneral}/api/auth/signup`, {
      method: "POST",
      body: JSON.stringify({
        nome: name,
        sobrenome: sobreNome,
        username: userName,
        email: emailUser,
        data_nascimento: bornDate + " " + "00:00:00",
        senha: password,
        categoria: category,
        n_identificacao: identificationNumber,
        tipo_utente: "Passageiro",
        estado: "On",
        curso: curso,
        saldo: 5000,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("Resposta:", json);
        if (json.errors) {
          const field = Object.keys(json.errors)[0];
          Toast.show({
            type: "error",
            text1: "ERRO",
            text2: `${json.errors[field]}`,
          });
        } else {
          Toast.show({
            type: "success",
            text1: "SUCESSO",
            text2: "Conta crianda com sucesso!",
          });
          setStoreUseData(json);
          Navigation.dispatch(StackActions.replace("principal"));
        }
      })
      .finally(() =>
        setFormCreateAccount((previos) => ({ ...previos, isLoading: false }))
      );
  };

  return (
    <View>
      <TextInput
        className="w-full h-12 text-gray700 text-xs rounded-md my-1 pl-5 bg-white500"
        placeholderTextColor={"#5B5B60"}
        placeholder={"Digite o seu nome"}
        onChangeText={(text) =>
          setFormCreateAccount((prev) => ({ ...prev, name: text }))
        }
      />

      <TextInput
        className="w-full h-12 text-gray700 text-xs rounded-md my-1 pl-5 bg-white500"
        placeholderTextColor={"#5B5B60"}
        placeholder={"Digite o seu Sobrenome"}
        onChangeText={(text) =>
          setFormCreateAccount((prev) => ({ ...prev, sobreNome: text }))
        }
      />

      <View className="w-full h-12 relative rounded-md my-1 flex-row">
        <TextInput
          className="w-10/12 h-full text-gray700 text-xs rounded-tl-md rounded-bl-md pl-5 bg-white500"
          placeholderTextColor={"#5B5B60"}
          placeholder={"Informe a Data de Nascimento"}
          editable={false}
          value={bornDate}
        />
        <Pressable
          className="items-center absolute top-0 right-0 justify-center w-[15%] h-full rounded-tr-md rounded-br-md bg-white500"
          onPress={onChangeDate}
        >
          <FontAwesome name="calendar" size={24} color={"#5B5B60"} />
        </Pressable>
      </View>

      {showCalender ? (
        <DateTimePicker
          mode="date"
          display="spinner"
          value={initialDate}
          onChange={onChange}
        />
      ) : null}

      <TextInput
        className="w-full h-12 text-gray700 text-xs rounded-md my-1 pl-5 bg-white500"
        placeholderTextColor={"#5B5B60"}
        placeholder={"Digite o seu nome de usuário"}
        onChangeText={(text) =>
          setFormCreateAccount((prev) => ({ ...prev, userName: text }))
        }
      />
      <TextInput
        className="w-full h-12 text-gray700 text-xs rounded-md my-1 pl-5 bg-white500"
        placeholderTextColor={"#5B5B60"}
        placeholder={"Digite o seu E-mail"}
        keyboardType="email-address"
        onChangeText={(text) =>
          setFormCreateAccount((prev) => ({ ...prev, emailUser: text }))
        }
      />
      <TextInput
        className="w-full h-12 text-gray700 text-xs rounded-md my-1 pl-5 bg-white500"
        placeholderTextColor={"#5B5B60"}
        placeholder={"Digite o seu Número de identificação"}
        onChangeText={(text) =>
          setFormCreateAccount((prev) => ({
            ...prev,
            identificationNumber: text,
          }))
        }
      />

      <SelectList
        setSelected={(selected) =>
          setFormCreateAccount((prev) => ({ ...prev, category: selected }))
        }
        data={categories}
        save="value"
        placeholder="Informe a Categoria"
        search={false}
        fontFamily="Roboto_400Regular"
        boxStyles={{
          backgroundColor: "#E8E8E8",
          marginTop: 5,
          borderRadius: 5,
        }}
        dropdownStyles={{ backgroundColor: "#E8E8E8" }}
        inputStyles={{ color: "#5A5A61", fontSize: 13 }}
      />

      {category === "Aluno" ? (
        <SelectList
          setSelected={(selected) =>
            setFormCreateAccount((prev) => ({ ...prev, curso: selected }))
          }
          data={Curso}
          save="value"
          placeholder="Informe o Curso"
          search={false}
          fontFamily="Roboto_400Regular"
          boxStyles={{
            backgroundColor: "#E8E8E8",
            marginTop: 7,
            borderRadius: 5,
          }}
          dropdownStyles={{ backgroundColor: "#E8E8E8" }}
          inputStyles={{ color: "#5A5A61", fontSize: 13 }}
        />
      ) : null}

      <View className="w-full h-12 relative rounded-md my-1 mt-2 bg-white500 flex-row">
        <TextInput
          className="w-10/12 h-full text-gray700 text-xs rounded-tl-md rounded-bl-md pl-5 bg-white500"
          placeholder={"Digite a Palavra-Passe"}
          placeholderTextColor={"#5B5B60"}
          secureTextEntry={passwordIsVisible ? false : true}
          onChangeText={(text) =>
            setFormCreateAccount((prev) => ({ ...prev, password: text }))
          }
        />
        <Pressable
          className="items-center absolute top-0 right-0 justify-center w-[15%] h-full rounded-tr-md rounded-br-md bg-white500"
          onPress={() =>
            setFormCreateAccount((prev) => ({
              ...prev,
              passwordIsVisible: !prev.passwordIsVisible,
            }))
          }
        >
          {passwordIsVisible ? (
            <FontAwesome name="eye" size={22} color={"#5B5B60"} />
          ) : (
            <FontAwesome name="eye-slash" size={22} color={"#5B5B60"} />
          )}
        </Pressable>
      </View>

      <View className="w-full">
        <View className="flex  mt-4">
          <ButtonDone
            enable={isLoading ? true : false}
            wrapperStyle="w-full h-12 mb-2 bg-greenLigth"
            description={isLoading ? <ActivityIndicator /> : "Concluir"}
            action={handleSubmit}
          />
        </View>
      </View>
    </View>
  );
}
