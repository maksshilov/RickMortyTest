import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, FlatList, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { IRenderItem } from '../components/RenderItem';
// src
import { useTypedSelector } from '../hooks/useTypedSelector';
import { RootStackParam } from '../RootNavigator';
import { windowWidth } from '../styles/vars';
// BODY

type Props = NativeStackScreenProps<RootStackParam, 'BottomTabsStack'>;

export const FavScreen = ({ navigation }: Props) => {
  const { favorites } = useTypedSelector(store => store.reducer);

  const renderItem = ({ item }: { item: IRenderItem }) => {
    return (
      <TouchableOpacity
        style={styles.wrapper}
        onPress={() => navigation.navigate('ElementsStack', { screen: 'CharScreen', params: item })}>
        <View key={item.id} style={styles.imgWrapper}>
          <Image source={{ uri: item.image }} style={styles.img} resizeMode={'cover'} />
          <Text style={styles.name}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.center}>
      <FlatList data={favorites} renderItem={renderItem} numColumns={2} />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  wrapper: {
    width: windowWidth * 0.45,
    height: windowWidth * 0.55,
    margin: windowWidth * 0.02,
  },
  imgWrapper: {
    width: '100%',
    height: windowWidth * 0.45,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  name: {
    margin: 10,
    fontFamily: 'OpenSans-Bold',
    fontSize: 15,
  },
});
