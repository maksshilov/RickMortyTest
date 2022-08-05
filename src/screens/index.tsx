import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { MainScreen } from './MainScreen';
import { FavoritesScreen } from './FavoritesScreen';
import { Color, tabLabel } from '../styles';
import { CharacterScreen } from './CharacterScreen';
import { TBottomTabsStackParams, TElementsStackParam, ERoutes, TRootStackParam } from '../types';

const defaultScreenOptions = { headerShown: false };

const BottomTabsStack = createBottomTabNavigator<TBottomTabsStackParams>();

const BottomTabsStackNavigator = () => {
  return (
    <BottomTabsStack.Navigator
      initialRouteName={ERoutes.MAIN_TAB}
      screenOptions={{
        ...defaultScreenOptions,
        tabBarActiveTintColor: Color.BROWN,
        tabBarInactiveTintColor: Color.GREY_EA,
      }}>
      <BottomTabsStack.Screen
        name={ERoutes.MAIN_TAB}
        component={MainScreen}
        options={{
          tabBarLabel: ERoutes.CHARACTER_SCREEN,
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account-group" size={20} color={color} />,
          tabBarLabelStyle: tabLabel,
        }}
      />
      <BottomTabsStack.Screen
        name={ERoutes.FAVORITES_TAB}
        component={FavoritesScreen}
        options={{
          tabBarLabel: ERoutes.FAVORITES_TAB,
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="heart" size={20} color={color} />,
          tabBarLabelStyle: tabLabel,
        }}
      />
    </BottomTabsStack.Navigator>
  );
};

const ElementsStack = createNativeStackNavigator<TElementsStackParam>();

const ElementsStackNavigator = () => {
  return (
    <ElementsStack.Navigator>
      <ElementsStack.Screen
        name={ERoutes.CHARACTER_SCREEN}
        component={CharacterScreen}
        options={{ headerTitleStyle: { fontFamily: 'OpenSans-Bold' } }}
      />
    </ElementsStack.Navigator>
  );
};

const RootStack = createNativeStackNavigator<TRootStackParam>();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name={ERoutes.BOTTOM_TABS_STACK}
        component={BottomTabsStackNavigator}
        options={defaultScreenOptions}
      />
      <RootStack.Screen
        name={ERoutes.ELEMENTS_STACK}
        component={ElementsStackNavigator}
        options={defaultScreenOptions}
      />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
