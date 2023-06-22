import React, { useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Dimensions } from "react-native";
import { Entypo, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Modalize } from "react-native-modalize";

import { MinhasBoleias } from "../screens/Principal_Pages/Boleias";
import { Inscricoes } from "../screens/Principal_Pages/Incrições";
import { Inicio } from "../screens/Principal_Pages/Inicio";
import { OrganizarBoleia } from "../screens/Principal_Pages/Organizar_Boleia";
import { Perfil } from "../screens/Principal_Pages/Perfil";
import { ButtonNew } from "../components/Buttons";
import { ModalHeader } from "../components/ModalHeader";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  const { height } = Dimensions.get("screen");

  const modalRef = useRef(null);
  const openModal = () => {
    if (modalRef.current) {
      modalRef.current?.open();
    }
  };

  return (
    <>
      <Modalize
        ref={modalRef}
        snapPoint={height / 1.4}
        keyboardAvoidingBehavior='height'
        avoidKeyboardLikeIOS={true}
        modalStyle={{
          backgroundColor: "#121214",
        }}
        HeaderComponent={<ModalHeader titulo='Organizar Boleia' />}
      >
        <OrganizarBoleia />
      </Modalize>

      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#202024",
            borderTopColor: "transparent",
            height: 60,
            paddingBottom: 8,
            paddingTop: 8,
          },
          tabBarActiveTintColor: "#238C66",
          tabBarInactiveTintColor: "#797983",
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "600",
          },
          headerTintColor: "#FFF",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Roboto_500Medium",
            fontSize: 18,
            marginTop: 20,
          },
          headerStyle: {
            backgroundColor: "#238C66",
          },
        }}
      >
        <Tab.Screen
          name='Home'
          component={Inicio}
          options={{
            headerTitle: "Procure por uma Boleia",
            tabBarIcon: ({ size, color }) => <Entypo name='home' size={size} color={color} />,
          }}
        />

        <Tab.Screen
          name='Boleias'
          component={MinhasBoleias}
          options={{
            headerTitle: "Minhas Boleias",
            tabBarIcon: ({ size, color }) => <Entypo name='heart' size={size} color={color} />,
          }}
        />

        <Tab.Screen
          name='Organizar'
          component={OrganizarBoleia}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ size }) => <ButtonNew size={size} action={() => openModal()} />,
          }}
        />

        <Tab.Screen
          name='Inscrições'
          component={Inscricoes}
          options={{
            headerTitle: "Minhas Inscrições",
            tabBarIcon: ({ size, color }) => <Ionicons name='calendar' size={size} color={color} />,
          }}
        />

        <Tab.Screen
          name='Perfil'
          component={Perfil}
          options={{
            headerTitle: "Meu Perfil",
            tabBarIcon: ({ size, color }) => (
              <FontAwesome5 name='user-alt' size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}