import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//Screens
import LoginPage from '../screens/auth/LoginPage';
import Dashboard from '../screens/Dashboard';

const Stack = createNativeStackNavigator();


const AuthStack =()=>{
    return(
        <Stack.Navigator initialRouteName="LoginPage" screenOptions={{headerShown: false}}>
            <Stack.Screen name="LoginPage" component={LoginPage}/>
            <Stack.Screen name="Dashboard" component={Dashboard}/>
        </Stack.Navigator>
    );
}

export default AuthStack;
