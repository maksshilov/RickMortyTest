import React, { useEffect } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import FastImage from 'react-native-fast-image';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// src
import { InfoCard } from '../components/InfoCard';
import { useAction } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { ElementsStackParam } from '../RootNavigator';
import { colors, windowWidth } from '../styles/vars';
// BODY

type Props = NativeStackScreenProps<ElementsStackParam, 'CharScreen'>;

export function CharScreen({ route, navigation }: Props) {
  const { addToFav, removeFromFav } = useAction();

  const { name, gender, status, origin, location, image } = route.params.item;
  const { item } = route.params;

  const { favorites } = useTypedSelector(store => store.reducer);
  const isFavorite = !!favorites.filter((favItem: any) => favItem.id === item.id).length;

  useEffect(() => navigation.setOptions({ title: name }), [navigation, name]);

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.center}>
        <View style={styles.imgWrapper}>
          <FastImage source={{ uri: image }} style={styles.img} />
          <TouchableOpacity onPress={isFavorite ? () => removeFromFav(item) : () => addToFav(item)}>
            <MaterialCommunityIcons
              style={styles.icon}
              name={isFavorite ? 'heart' : 'heart-outline'}
              size={50}
              color={isFavorite ? colors.brown : colors.grey}
            />
          </TouchableOpacity>
        </View>
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
  imgWrapper: {
    position: 'relative',
  },
  img: {
    width: windowWidth,
    height: windowWidth,
  },
  icon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});
