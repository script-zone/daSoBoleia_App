import * as yup from "yup";

export type inputLoginData = {
    email: string;
    password: string;
  }

export const schema = yup.object({
    email: yup.string().required('Informe o seu email'),
    password: yup.string().required('Informe a sua password')
})

export const categories = [
  { key: 1, value: "Professor(a)" },
  { key: 2, value: "Funcionario(a)" },
  { key: 3, value: "Aluno(a)" },
  { key: 4, value: "" },
];

export const Curso = [
  { key: 1, value: "Ciências da Computação" },
  { key: 2, value: "Matemática" },
  { key: 3, value: "Fisica" },
  { key: 4, value: "" },
];

export type buttonProps = Partial<{
  size: number;
  icon: React.ReactNode;
  description: string;
  action: () => void;
  wrapperStyle: string;
  textStyle: string;
  color: string,
  opacity: number,
}>