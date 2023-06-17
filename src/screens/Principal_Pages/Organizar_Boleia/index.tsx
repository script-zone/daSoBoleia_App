import  React, {useState} from 'react'
import { View, TextInput, Platform, Pressable } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import DateTimePicker from '@react-native-community/datetimepicker';
import { FontAwesome } from '@expo/vector-icons';

export function OrganizarBoleia(){ 
    const [data, setData] = useState(new Date())
    const [dataBoleia, setDataBoleia] = useState('')
    const [mostrarCalendario, setMostrarCalendario] = useState(false)

    const alterarData = () => {
        setMostrarCalendario(true)
    }
    
    const onChange = (event, selectedDate) => {
        setMostrarCalendario(false)
        setData(selectedDate);
        setDataBoleia(selectedDate.toISOString())
      };

    const Curso = [
        {key:'1', value:'Ciências da Computação'},
        {key:'2', value:'Matemática'},
        {key:'3', value:'Fisica'},
        {key:'3', value:''}
      ]

    const Tipo_de_Boleia = [
        {key:'1', value:'Única'},
        {key:'2', value:'Frequente'},
        {key:'3', value:''}
      ]

    return(
        <View className='flex-1 m-4 justify-center items-center mt-5'>
            <View className='w-full'>
                <SelectList 
                    setSelected={(val) => {}} 
                    data={Curso} 
                    save="value"
                    placeholder='Seleccione o local de Origem' 
                    search={false}
                    fontFamily='Roboto_400Regular'
                    boxStyles={{backgroundColor:'#202024', marginTop:4, borderRadius:5, borderColor:'#202024'}}
                    dropdownStyles={{backgroundColor:'#202024', borderColor:'#202024'}}
                    dropdownTextStyles={{color:'#5A5A61'}}
                    inputStyles={{color:'#5A5A61', fontSize:13}}
                    
                />

                <SelectList 
                    setSelected={(val) => {}} 
                    data={Curso} 
                    save="value"
                    placeholder='Seleccione o local de Destino' 
                    search={false}
                    fontFamily='Roboto_400Regular'
                    boxStyles={{backgroundColor:'#202024', marginBottom:4, marginTop:8, borderRadius:5, borderColor:'#202024'}}
                    dropdownStyles={{backgroundColor:'#202024', borderColor:'#202024'}}
                    dropdownTextStyles={{color:'#5A5A61'}}
                    inputStyles={{color:'#5A5A61', fontSize:13}}
                />

                <TextInput 
                    className='w-full h-12 text-gray700 text-xs rounded-md my-1 pl-5 bg-gray500'
                    placeholder={'Informe o custo da Boleia'}
                    placeholderTextColor={'#5B5B60'}
                    keyboardType='numeric'
                />

                <TextInput 
                    className='w-full h-12 text-gray700 text-xs rounded-md my-1 pl-5 bg-gray500'
                    placeholder={'Informe a Quantidade de Passageiros'}
                    placeholderTextColor={'#5B5B60'}
                    keyboardType='numeric'
                />

                <SelectList 
                    setSelected={(val) => {}} 
                    data={Tipo_de_Boleia} 
                    save="value"
                    placeholder='Seleccione o tipo de Boleia' 
                    search={false}
                    fontFamily='Roboto_400Regular'
                    boxStyles={{backgroundColor:'#202024', marginBottom:4, marginTop:4, borderRadius:5, borderColor:'#202024'}}
                    dropdownStyles={{backgroundColor:'#202024', borderColor:'#202024'}}
                    dropdownTextStyles={{color:'#5A5A61'}}
                    inputStyles={{color:'#5A5A61', fontSize:13}}
                />

                <View className='w-full h-12 relative rounded-md my-1 bg-black flex-row'>
                    <TextInput 
                        className='w-10/12 h-full text-gray700 text-xs rounded-tl-md rounded-bl-md pl-5 bg-gray500'
                        placeholder={'Informe a Data da Boleia'}
                        placeholderTextColor={'#5B5B60'}
                        editable={false}
                        value={dataBoleia}
                    />
                    <Pressable className='items-center absolute top-0 right-0 justify-center w-[15%] h-full rounded-tr-md rounded-br-md bg-gray500' onPress={alterarData}>
                        <FontAwesome name="calendar" size={24} color={'#5B5B60'} />
                    </Pressable>
                </View>

                {mostrarCalendario ? (<DateTimePicker
                        mode='date'
                        display='spinner'
                        value={data}
                        onChange={onChange}
                    />) : <></>}
            </View>
        </View>
    )
}