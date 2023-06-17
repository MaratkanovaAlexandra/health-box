import type {ParamListBase} from '@react-navigation/native';
import {useNavigation as useNativeNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

export enum Screens {
  Main = 'Main',
  Option = 'Option',
  Login = 'Login',
  Register = 'Register',
}

type Routes = Screens;

export const useNavigation = () =>
  useNativeNavigation<NativeStackNavigationProp<ParamListBase, Routes>>();

export interface WithId {
  id: string;
}
