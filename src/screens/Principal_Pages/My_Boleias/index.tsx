import React, { useEffect, useRef, useState } from "react";
import { Dimensions, FlatList, View } from "react-native";
import { InfoMenssage } from "../../../components/info";
import { InputDeBusca } from "../../../components/InputDeBusca";
import {
  APIRouterGeneral,
  boleiaProps,
  getCache,
  setCacheExpiration,
} from "../../../Datas/Uteis";
import { Boleia } from "../../../components/Boleia";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Modalize } from "react-native-modalize";
import { ModalHeader } from "../../../components/ModalHeader";
import { DetailsMinhasBoleias } from "../../../components/Details";

export function MinhasBoleias() {
  const [boleias, setBoleias] = useState<boleiaProps[]>([]);
  const [userCodigo, setUserCodigo] = useState(0);
  const [codigoBoleia, setCodigoBoleia] = useState(0);
  const { height } = Dimensions.get("screen");

  const getItemsInLocalStoreged = async () => {
    const itemStoreged = await AsyncStorage.getItem("@dasoboleia:UserData");
    const previous = itemStoreged ? JSON.parse(itemStoreged) : {};
    setUserCodigo(previous.codigo);
  };

  useEffect(() => {
    getItemsInLocalStoreged();
    axios
      .get(`${APIRouterGeneral}/api/boleia/my_rides/${userCodigo}`)
      .then((response) => {
        setBoleias(response.data);
      })
      .catch((error) => {
        console.log(error.response?.data?.message);
      })
      .finally(() => {});
  }, []);

  const modalRef = useRef(null);
  const openModal = () => {
    if (modalRef.current) {
      modalRef.current?.open();
    }
  };

  const renderItem2 = ({ item }: { item: boleiaProps }) => {
    return (
      <Boleia
        item={item}
        onPress={() => {
          setCodigoBoleia(Number(item.CODIGO));
          openModal();
        }}
      />
    );
  };

  return (
    <>
      <Modalize
        ref={modalRef}
        snapPoint={height / 2}
        modalHeight={height / 2}
        keyboardAvoidingBehavior="height"
        avoidKeyboardLikeIOS={true}
        modalStyle={{
          backgroundColor: "#121214",
        }}
        HeaderComponent={<ModalHeader titulo="Detalhes da Boleia" />}
      >
        <DetailsMinhasBoleias cod={codigoBoleia} />
      </Modalize>

      <View className="flex-1 bg-black p-4">
        <View className="items-center">
          <InputDeBusca totalBoleias={boleias.length} />
        </View>
        <View className="flex-1 justify-center items-center">
          {boleias.length > 0 ? (
            <FlatList
              className="w-full"
              data={boleias}
              renderItem={renderItem2}
              keyExtractor={(item) => String(item.CODIGO)}
              numColumns={1}
              showsVerticalScrollIndicator={false}
            />
          ) : (
            <InfoMenssage
              Text0="Ainda não organizaste nehuma"
              Text1="Boleia até ao momento..."
            />
          )}
        </View>
      </View>
    </>
  );
}
