import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ElementsStackParam } from '../RootNavigator';
// src
// BODY

type Props = NativeStackScreenProps<ElementsStackParam, 'CharScreen'>;

export const CharScreen = ({ route, navigation }: Props) => {
  navigation.setOptions({ title: route.params.name });
  console.log(route);
  return (
    <View style={styles.center}>
      <Text>CharScreen</Text>
      <Text>ID: {route.params.id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
