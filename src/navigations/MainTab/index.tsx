import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, SettingsScreen} from 'screens';
import {SvgIcon} from 'components/@base';
import {MainTabParamList} from './types';

const Tab = createBottomTabNavigator<MainTabParamList>();

function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#64748b',
        tabBarInactiveTintColor: '#e2e8f0',
        tabBarStyle: {height: 72},
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <SvgIcon name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({color}) => (
            <SvgIcon name="settings" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTab;
