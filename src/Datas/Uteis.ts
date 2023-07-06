import * as yup from "yup";

export type inputLoginData = {
  email: string;
  password: string;
};

export const schemaLogin = yup.object({
  email: yup.string().required("Informe o seu email").email(),
  password: yup.string().required("Informe a sua password"),
});
export type FormDataLogin = yup.InferType<typeof schemaLogin>;

export const categories = [
  { key: 1, value: "Docente" },
  { key: 2, value: "Funcionario" },
  { key: 3, value: "Aluno" },
  { key: 4, value: "" },
];

export const Curso = [
  { key: 1, value: "Ciências da Computação" },
  { key: 2, value: "Matemática" },
  { key: 3, value: "Fisica" },
  { key: 4, value: "" },
];

export const Tipo_de_Boleia = [
  { key: "1", value: "Unica" },
  { key: "3", value: "" },
];
export type buttonProps = Partial<{
  size: number;
  icon: React.ReactNode;
  description: string | React.ReactNode;
  action: () => void;
  wrapperStyle: string;
  textStyle: string;
  color: string;
  opacity: number;
  enable: boolean;
}>;

export type boleiaPropsData = {
  item: boleiaProps;
  onPress: () => void;
};
export interface boleiaProps {
  CODIGO: Number;
  QTD_PASSAGEIRO: Number;
  CUSTO_BOLEIA: Number;
  DATA_BOLEIA: string;
  TIPO_BOLEIA: Number;
  LOCAL_ORIGEM: number;
  LOCAL_DESTINO: number;
  ESTADO: string;
  CODIGO_UTENTE: number;
  ORIGEM: string;
  DESTINO: string;
}

export interface utenteProps {
  CODIGO: Number;
  NOME: string;
  SOBRENOME: string;
  USERNAME: string;
  EMAIL: string;
  DATA_NASCIMENTO: string;
  SENHA: string;
  CATEGORIA: string;
  N_IDENTIFICACAO: string;
  TIPO_UTENTE: string;
  ESTADO: string;
  CURSO: string;
  SALDO: Number;
}

export type utente = utenteProps | {};
export interface localProps {
  CODIGO: number;
  NOME: string;
  LATITUDE: number;
  LONGITUDE: number;
}

const DEFAULT_EXPIRE = 1000 * 60;
const cacheMap = new Map();

export const setCacheExpiration = (
  key: string,
  value: any,
  expires = DEFAULT_EXPIRE
) => {
  cacheMap.set(key, {
    expire: new Date().getTime() + expires,
    value,
  });
  return value;
};

export const getCache = (key: string) => {
  const cached = cacheMap.get(key);
  if (!cached) return null;
  if (cached.expire > new Date().getTime()) return cached.value;
  cacheMap.delete(key);
  return null;
};

export const APIRouterGeneral = "http://192.168.43.90:3336";
