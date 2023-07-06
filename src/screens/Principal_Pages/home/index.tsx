import React, { useEffect, useRef, useState } from "react";
import { Dimensions, FlatList, View } from "react-native";
import { InfoMenssage } from "../../../components/info";
import { InputDeBusca } from "../../../components/InputDeBusca";
import { Boleia } from "../../../components/Boleia";
import axios from "axios";
import {
  boleiaProps,
  APIRouterGeneral,
  getCache,
  setCacheExpiration,
} from "../../../Datas/Uteis";
import { Modalize } from "react-native-modalize";
import { ModalHeader } from "../../../components/ModalHeader";
import { DetailsTodasBoleias } from "../../../components/Details";
// 1minute

export function Inicio() {
  const [boleias, setBoleias] = useState<boleiaProps[]>([]);
  const [codigoBoleia, setCodigoBoleia] = useState(0);
  const { height } = Dimensions.get("screen");

  useEffect(() => {
    const cachedBoleias = getCache("@boleias");
    if (getCache("@boleias")) return cachedBoleias;
    else {
      axios
        .get(`${APIRouterGeneral}/api/boleia/especific/boleia`)
        .then((response) => {
          setCacheExpiration("@boleias", response.data);
          setBoleias(response.data);
        })
        .catch((error) => {
          console.log(error.response?.data?.message);
        })
        .finally(() => {});
    }
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
        {codigoBoleia && <DetailsTodasBoleias cod={codigoBoleia} />}
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
              Text0="Nenhuma Boleia disponivel"
              Text1="até ao momento..."
            />
          )}
        </View>
      </View>
    </>
  );
}
