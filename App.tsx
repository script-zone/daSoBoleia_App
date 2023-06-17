import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import  Routes  from './src/routers';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar'

import { 
  useFonts, 
  Roboto_400Regular, 
  Roboto_500Medium, 
  Roboto_700Bold } from '@expo-google-fonts/roboto'

function App() {
  const [ LoadingFonts ] = useFonts({
    Roboto_400Regular, 
    Roboto_500Medium, 
    Roboto_700Bold
  })

  if (!LoadingFonts){
    return (
      <View className='flex-1 justify-center items-center bg-green'>
        <StatusBar 
          style='light'
        />
        <ActivityIndicator className='text-white' size={"large"} />
      </View>
    )
  }


  return (
      <Routes/>
  );
}


export default gestureHandlerRootHOC(App)