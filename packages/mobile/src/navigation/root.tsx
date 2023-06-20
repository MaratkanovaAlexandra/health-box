import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from './routes';
import {
  LoginScreen,
  MainScreen,
  OptionScreen,
  RegisterScreen,
} from '../screens';

const Stack = createNativeStackNavigator();

export const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Screens.Option}>
      <Stack.Screen name={Screens.Main} component={MainScreen} />
      <Stack.Screen name={Screens.Option} component={OptionScreen} />
      <Stack.Screen name={Screens.Login} component={LoginScreen} />
      <Stack.Screen name={Screens.Register} component={RegisterScreen} />
    </Stack.Navigator>
  );
};
