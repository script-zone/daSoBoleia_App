import React from "react";
import { ActivityIndicator, View } from "react-native";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import Routes from "./src/routers";
import Toast from "react-native-toast-message";

import { toastConfig } from "./src/Datas/toastMessageConfig";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

function App() {
  const [LoadingFonts] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!LoadingFonts) {
    return (
      <View className="flex-1 justify-center items-center bg-green">
        <StatusBar style="light" />
        <ActivityIndicator
          className="text-white"
          size={"large"}
          animating={true}
        />
      </View>
    );
  }

  return (
    <>
      <StatusBar backgroundColor="#238C66" style="light" />
      <Routes />
      <Toast config={toastConfig} autoHide={true} position="top" />
    </>
  );
}

export default gestureHandlerRootHOC(App);
