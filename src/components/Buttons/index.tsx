import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { MaterialIcons, Entypo } from "@expo/vector-icons";

import { buttonProps } from "../../Datas/Uteis";

export const BaseButton = ({
  enable,
  description,
  action,
  wrapperStyle,
  icon,
  textStyle,
}: buttonProps) => {
  return (
    <TouchableOpacity
      className={`h-12 items-center justify-center rounded-md shadow-sm shadow-indigo-500/40 ${wrapperStyle}`}
      activeOpacity={0.6}
      onPress={action}
      disabled={enable}
    >
      {description && (
        <Text className={`text-white font-semibold ${textStyle}`}>
          {description}
        </Text>
      )}
      {icon && icon}
    </TouchableOpacity>
  );
};

export const ButtonDone = (props: buttonProps) => (
  <BaseButton wrapperStyle="absolute top-0 right-0" {...props} />
);

export const ButtonBack = (props: buttonProps) => (
  <BaseButton
    icon={<MaterialIcons name="arrow-back-ios" size={24} color={"#ece9e9"} />}
    wrapperStyle="w-14 h-14 justify-center rounded-full"
    {...props}
  />
);

export const ButtonCancel = (props: buttonProps) => (
  <BaseButton wrapperStyle="bg-red" {...props} />
);

export const ButtonConnect = ({ enable, ...props }: buttonProps) => (
  <BaseButton wrapperStyle="w-full p-4" enable={enable} {...props} />
);

export const ButtonEdit = (props: buttonProps) => (
  <BaseButton
    icon={<Entypo name="edit" color={"#fff"} />}
    wrapperStyle="w-15 mr-1 p-2"
    {...props}
  />
);

export const ButtonNew = (props: buttonProps) => (
  <BaseButton
    icon={<Entypo name="plus" size={props.size} color={"#ece9e9"} />}
    wrapperStyle="w-14 h-14 mt-[-28] rounded-full bg-green"
    {...props}
  />
);

export const ButtonRegister = (props: buttonProps) => (
  <BaseButton wrapperStyle="mr-1" {...props} />
);

export const ButtonNext = (props: buttonProps) => (
  <BaseButton wrapperStyle="absolute top-0 right-0" {...props} />
);

export const ButtonLog_Out = ({ color, action, opacity }: buttonProps) => (
  <TouchableOpacity
    className="mt-5 mr-2"
    activeOpacity={opacity}
    onPress={action}
  >
    <Entypo name="log-out" size={20} color={color} />
  </TouchableOpacity>
);
