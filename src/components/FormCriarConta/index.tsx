import React, {useState} from 'react';
import { View, Text, Pressable, TextInput} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

import ButtonCancelar from '../ButtonCancelar';
import ButtonConcluir from '../ButtoConcluir';
import ButtonSeguinte from '../ButtonSeguinte';


export function FormCriarConta() {
  const navigation = useNavigation()

  const [selected, setSelected] = useState("");
  const [isChecked, setChecked] = useState(false);
  const [verSenha, setVerSenha] = useState(false);
  const [data, setData] = useState(new Date())
  const [dataNascimento, setDataNascimento] = useState('')
  const [mostrarCalendario, setMostrarCalendario] = useState(false)
  
  const alterarData = () => {
        setMostrarCalendario(true)
    }
    
    const onChange = (event, selectedDate) => {
        setMostrarCalendario(false)
        setData(selectedDate);
        setDataNascimento(selectedDate.toLocaleDateString())
      };

  const Categoria = [
    {key:'1', value:'Professor(a)'},
    {key:'2', value:'Funcionario(a)'},
    {key:'3', value:'Aluno(a)'},
    {key:'3', value:''}
  ]

  const Curso = [
    {key:'1', value:'Ciências da Computação'},
    {key:'2', value:'Matemática'},
    {key:'3', value:'Fisica'},
    {key:'3', value:''}
  ]


  return (
    <View>
      <TextInput 
        className='w-full h-12 text-gray700 text-xs rounded-md my-1 pl-5 bg-white500'
        placeholder={'Digite o seu nome'}
        placeholderTextColor={'#5B5B60'}
      />

      <View className='w-full h-12 relative rounded-md my-1 flex-row'>
        <TextInput 
            className='w-10/12 h-full text-gray700 text-xs rounded-tl-md rounded-bl-md pl-5 bg-white500'
            placeholder={'Informe a Data de Nascimento'}
            placeholderTextColor={'#5B5B60'}
            editable={false}
            value={dataNascimento}
        />
        <Pressable className='items-center absolute top-0 right-0 justify-center w-[15%] h-full rounded-tr-md rounded-br-md bg-white500' onPress={alterarData}>
            <FontAwesome name="calendar" size={24} color={'#5B5B60'} />
        </Pressable>
      </View>

      {mostrarCalendario ? (<DateTimePicker
                        mode='date'
                        display='spinner'
                        value={data}
                        onChange={onChange}
                    />) : <></>}

      <TextInput 
        className='w-full h-12 text-gray700 text-xs rounded-md my-1 pl-5 bg-white500'
        placeholder={'Digite o seu nome de usuário'}
        placeholderTextColor={'#5B5B60'}
      />

      <TextInput 
        className='w-full h-12 text-gray700 text-xs rounded-md my-1 pl-5 bg-white500'
        placeholder={'Digite o seu E-mail'}
        placeholderTextColor={'#5B5B60'}
        keyboardType='email-address'
      />

      <TextInput 
        className='w-full h-12 text-gray700 text-xs rounded-md my-1 pl-5 bg-white500'
        placeholder={'Digite o seu Número de identificação'}
        placeholderTextColor={'#5B5B60'}
      />

      <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={Categoria} 
        save="value"
        placeholder='Informe a Categoria' 
        search={false}
        fontFamily='Roboto_400Regular'
        boxStyles={{backgroundColor:'#E8E8E8', marginTop:5, borderRadius:5}}
        dropdownStyles={{backgroundColor:'#E8E8E8'}}
        inputStyles={{color:'#5A5A61', fontSize:13}}
      />

      { selected === 'Aluno(a)' 
                  ? (<SelectList 
                  setSelected={(val) => {}} 
                  data={Curso} 
                  save="value"
                  placeholder='Informe o Curso' 
                  search={false}
                  fontFamily='Roboto_400Regular'
                  boxStyles={{backgroundColor:'#E8E8E8', marginTop:7, borderRadius:5}}
                  dropdownStyles={{backgroundColor:'#E8E8E8'}}
                  inputStyles={{color:'#5A5A61', fontSize:13}}
                />) : <></>}

      <View className='w-full h-12 relative rounded-md my-1 mt-2 bg-white500 flex-row'>
        <TextInput 
            className='w-10/12 h-full text-gray700 text-xs rounded-tl-md rounded-bl-md pl-5 bg-white500'
            placeholder={'Digite a Palavra-Passe'}
            placeholderTextColor={'#5B5B60'}
            secureTextEntry={verSenha ? false : true}
        />
        <Pressable className='items-center absolute top-0 right-0 justify-center w-[15%] h-full rounded-tr-md rounded-br-md bg-white500' onPress={() => setVerSenha(!verSenha)}>
            {verSenha ? (<FontAwesome name="eye" size={22} color={'#5B5B60'} />) : (<FontAwesome name="eye-slash" size={22} color={'#5B5B60'} />)}
        </Pressable>
      </View>

      <View className='w-full'>
        <View className='w-full h-10 items-center flex-row mt-1'>
          <Checkbox className='bg-white500' value={isChecked} onValueChange={setChecked} />
          <Text className='text-white ml-2'>Tenho uma viatura</Text>
        </View>

        <View className='flex relative flex-row  mt-1'>
          <ButtonCancelar name={'Cancelar'} action={() => {}}/>
          { isChecked 
                ? <ButtonSeguinte name={'Seguinte'} action={() => navigation.navigate('registarViatura')}/> 
                : <ButtonConcluir name={'Concluir'} action={() => {}}/>}
        </View>
      </View>
    </View>
  );
}
