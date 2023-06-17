import { NavigationContainer } from '@react-navigation/native';

import { StackRouter } from './stackRouter';
export default function Routes(){
    return(
        <NavigationContainer>
            <StackRouter/>
        </NavigationContainer>

    )
}