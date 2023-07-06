import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { InfoMenssage } from "../../../components/info";
import { InputDeBusca } from "../../../components/InputDeBusca";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Boleia } from "../../../components/Boleia";
import {
  boleiaProps,
  APIRouterGeneral,
  getCache,
  setCacheExpiration,
} from "../../../Datas/Uteis";

export function Inscricoes() {
  const [boleias, setBoleias] = useState<boleiaProps[]>([]);
  const [userCodigo, setUserCodigo] = useState(0);

  const getItemsInLocalStoreged = async () => {
    const itemStoreged = await AsyncStorage.getItem("@dasoboleia:UserData");
    const previous = itemStoreged ? JSON.parse(itemStoreged) : {};
    setUserCodigo(previous.codigo);
  };

  useEffect(() => {
    getItemsInLocalStoreged();
    axios
      .get(`${APIRouterGeneral}/api/boleia/my_records/${userCodigo}`)
      .then((response) => {
        setBoleias(response.data);
      })
      .catch((error) => {
        console.log(error.response?.data?.message);
      })
      .finally(() => {});
  }, []);

  const renderItem2 = ({ item }: { item: boleiaProps }) => {
    return <Boleia item={item} onPress={() => alert("Cliquei aquiiiiiiiii")} />;
  };

  return (
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
            Text0="Ainda não se Inscreveste em nehuma"
            Text1="Boleia até ao momento..."
          />
        )}
      </View>
    </View>
  );
}
