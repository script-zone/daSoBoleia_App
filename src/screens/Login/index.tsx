import React, { useState } from "react";
import {
  View,
  ActivityIndicator,
  Text,
  Pressable,
  ImageBackground,
  Image,
  TextInput,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation, StackActions } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { FontAwesome } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

import { ButtonConnect } from "../../components/Buttons";
import {
  schemaLogin,
  FormDataLogin,
  APIRouterGeneral,
} from "../../Datas/Uteis";
import MyError from "../../components/ErrorMessage";
import axios from "axios";

const imgBackground = require("../../../assets/Welcome.png");
const logo = require("../../../assets/bigLogoLogin.png");

async function setStoreUseData(value: object) {
  await AsyncStorage.setItem("@dasoboleia:UserData", JSON.stringify(value));
}

export function Login() {
  const navigation = useNavigation();
  const [{ passwordIsVisible, isLoading }, setFormCreateAccount] = useState({
    passwordIsVisible: false,
    isLoading: false,
  });
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataLogin>({
    resolver: yupResolver(schemaLogin),
  });

  const onSubmit = (data: FormDataLogin) => {
    setFormCreateAccount((previos) => ({ ...previos, isLoading: true }));
    axios
      .post(`${APIRouterGeneral}/api/auth/login`, {
        email: data.email,
        senha: data.password,
      })
      .then((response) => {
        console.log("Resposta:", response.data);
        setStoreUseData(response.data);
        navigation.dispatch(StackActions.replace("principal"));
      })
      .catch((error) => {
        console.log(error);
        if (error.response?.data?.message) {
          Toast.show({
            type: "error",
            text1: "ERRO",
            text2: `${error.response?.data?.message}`,
          });
        } else {
          Toast.show({
            type: "error",
            text1: "ERRO",
            text2: "Erro inesperado",
          });
        }
      })
      .finally(() => {
        setFormCreateAccount((previos) => ({ ...previos, isLoading: false }));
      });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView className="flex-1 h-full">
        <KeyboardAwareScrollView className="flex-1 bg-white500">
          <ImageBackground
            className="flex-1 bg-green"
            source={imgBackground}
            resizeMode={"cover"}
          >
            <StatusBar style="light" />
            <View className="h-1/5 mt-24 mb-12 justify-center items-center">
              <Image source={logo} />
            </View>

            <View className="flex-1 rounded-t-3xl bg-white500 items-center justify-center p-9">
              <View className="items-center mt-4">
                <Text className="text-greenLigth font-bold  text-2xl">
                  Bem-Vindo de Volta
                </Text>
                <Text className="text-greenLigth">Conecte-se agora!</Text>
              </View>

              <View className="w-full">
                <Controller
                  control={control}
                  name="email"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      className="w-full h-12 text-gray800 border-solid border-2 border-gray800 mt-6 rounded-md pl-5 focus:border-green"
                      placeholder="Email"
                      keyboardType="email-address"
                      placeholderTextColor={"#706D6F"}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                    />
                  )}
                />
                {errors.email && (
                  <MyError erro={String(errors.email?.message)} />
                )}

                <Controller
                  control={control}
                  name="password"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <View className="w-full h-12 relative border-2 border-gray800 mt-7 rounded-md flex-row focus:border-green">
                      <TextInput
                        className="w-10/12 h-full text-gray800 text-xs pl-5 "
                        placeholder={"Password"}
                        secureTextEntry={passwordIsVisible ? false : true}
                        placeholderTextColor={"#706D6F"}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        autoCorrect={false}
                        autoCapitalize="none"
                      />
                      <Pressable
                        className="items-center absolute top-0 right-0 justify-center w-[15%] h-full rounded-br-md "
                        onPress={() =>
                          setFormCreateAccount((props) => ({
                            ...props,
                            passwordIsVisible: !passwordIsVisible,
                          }))
                        }
                      >
                        {passwordIsVisible ? (
                          <FontAwesome name="eye" size={22} color={"#5B5B60"} />
                        ) : (
                          <FontAwesome
                            name="eye-slash"
                            size={22}
                            color={"#5B5B60"}
                          />
                        )}
                      </Pressable>
                    </View>
                  )}
                />
                {errors.password && (
                  <MyError erro={String(errors.password?.message)} />
                )}
              </View>
              <View className="w-full my-4">
                <Text className="text-greenLigth text-right">
                  Esqueceu a sua palavra-Passe?
                </Text>
              </View>

              <View className="w-full items-center ">
                <ButtonConnect
                  enable={isLoading ? true : false}
                  wrapperStyle="w-full bg-greenLigth"
                  description={isLoading ? <ActivityIndicator /> : "Conecte-se"}
                  action={handleSubmit(onSubmit)}
                />
                <View className="flex flex-row justify-center my-4">
                  <Text className="text-greenLigth text-xs">
                    Novo em dá só Boleia?{" "}
                  </Text>
                  <Text
                    className="text-blue6000 text-xs"
                    onPress={() => navigation.navigate("criarConta")}
                  >
                    Inscreva-se aqui!
                  </Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
