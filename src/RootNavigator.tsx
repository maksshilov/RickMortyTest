// libs
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigatorScreenParams } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// src
import { MainScreen } from './screens/MainScreen';
import { FavScreen } from './screens/FavScreen';
import { CharScreen } from './screens/CharScreen';
import { colors } from './styles/vars';
// BODY

const navOptions = { headerShown: false };

export type BottomTabsStackParam = {
  Main: undefined;
  Favorites: undefined;
};
const BottomTabsStack = createBottomTabNavigator<BottomTabsStackParam>();
const BottomTabsStackNavigator = () => {
  return (
    <BottomTabsStack.Navigator
      initialRouteName={'Main'}
      screenOptions={{
        ...navOptions,
        tabBarActiveTintColor: colors.brown,
        tabBarInactiveTintColor: colors.grey,
        // tabBarActiveBackgroundColor: colors.paleOrange,
      }}>
      <BottomTabsStack.Screen
        name="Main"
        component={MainScreen}
        options={{
          tabBarLabel: 'Characters',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account-group" size={20} color={color} />,
          tabBarLabelStyle: { fontFamily: 'OpenSans-Bold', fontSize: 13 },
        }}
      />
      <BottomTabsStack.Screen
        name="Favorites"
        component={FavScreen}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="heart" size={20} color={color} />,
          tabBarLabelStyle: { fontFamily: 'OpenSans-Bold', fontSize: 13 },
        }}
      />
    </BottomTabsStack.Navigator>
  );
};

export type ElementsStackParam = {
  CharScreen: {
    item: {
      id: number;
      name: string;
      status: string;
      image: string;
      gender: string;
      origin: string;
      location: string;
    };
    isFavorite?: boolean;
  };
};
const ElementsStack = createNativeStackNavigator<ElementsStackParam>();
const ElementsStackNavigator = () => {
  return (
    <ElementsStack.Navigator>
      <ElementsStack.Screen
        name="CharScreen"
        component={CharScreen}
        options={{ headerTitleStyle: { fontFamily: 'OpenSans-Bold' } }}
      />
    </ElementsStack.Navigator>
  );
};

export type RootStackParam = {
  BottomTabsStack: NavigatorScreenParams<BottomTabsStackParam>;
  ElementsStack: NavigatorScreenParams<ElementsStackParam>;
};
const RootStack = createNativeStackNavigator<RootStackParam>();
const RootStackNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="BottomTabsStack" component={BottomTabsStackNavigator} options={navOptions} />
      <RootStack.Screen name="ElementsStack" component={ElementsStackNavigator} options={navOptions} />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
