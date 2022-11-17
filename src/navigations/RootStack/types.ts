import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  MainTab: undefined;
  Write: undefined;
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;
