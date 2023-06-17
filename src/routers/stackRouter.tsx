import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { WelcomeScreen } from '../screens/Welcome'
import { Login } from '../screens/Login'
import { CriarConta } from '../screens/Criar_Conta'
import { RegistarViatura } from '../screens/RegitarViatura'
import TabRoutes from './tabRouter';

const { Screen, Navigator} = createNativeStackNavigator();

export function StackRouter(){
    return(
        <Navigator> 
            <Screen
                name = "boasvindas"
                component={WelcomeScreen}
                options={{headerShown:false}}
            />

            <Screen
                name = "login"
                component={Login}
                options={{headerShown:false}}
            />

            <Screen
                name = "principal"
                component={TabRoutes}
                options={{headerShown:false}}
            />

            <Screen
                name = "criarConta"
                component={CriarConta}
                options={{headerShown:false}}
            />
            <Screen
                name = "registarViatura"
                component={RegistarViatura}
                options={{headerShown:false}}
            />
        </Navigator>
    )
}