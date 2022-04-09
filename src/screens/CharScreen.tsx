import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { InfoCard } from '../components/InfoCard';
import { ElementsStackParam } from '../RootNavigator';
import { windowWidth } from '../styles/vars';
// src
// BODY

type Props = NativeStackScreenProps<ElementsStackParam, 'CharScreen'>;

export function CharScreen({ route, navigation }: Props) {
  const { name, gender, status, origin, location, image } = route.params;

  useEffect(() => navigation.setOptions({ title: name }), [navigation, name]);

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.center}>
        <Image source={{ uri: image }} style={styles.img} />
        <View style={{ height: windowWidth * 0.05 }} />
        <InfoCard attr={'Name'} value={name} />
        <InfoCard attr={'Status'} value={status} />
        <InfoCard attr={'Gender'} value={gender} />
        <InfoCard attr={'Origin planet'} value={origin} />
        <InfoCard attr={'Loaction planet'} value={location} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  center: {
    flex: 1,
    alignItems: 'center',
  },
  img: {
    width: windowWidth,
    height: windowWidth,
  },
});
