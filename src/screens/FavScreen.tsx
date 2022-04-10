import React from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import FastImage from 'react-native-fast-image';
// src
import { IRenderItem } from '../components/RenderItem';
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
        onPress={() => navigation.navigate('ElementsStack', { screen: 'CharScreen', params: { item } })}>
        <View key={item.id} style={styles.imgWrapper}>
          <FastImage source={{ uri: item.image }} style={styles.img} resizeMode={'cover'} />
          <Text style={styles.name}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.center}>
      {favorites.length ? (
        <FlatList data={favorites} renderItem={renderItem} numColumns={2} />
      ) : (
        <Text style={styles.emptyText}>No Favorites yet.{'\n'}Let's add someone :)</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  wrapper: {
    width: windowWidth * 0.5,
    height: windowWidth * 0.68,
    padding: windowWidth * 0.02,
  },
  imgWrapper: {
    width: '100%',
    height: windowWidth * 0.5,
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
  emptyText: {
    textAlign: 'center',
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
  },
});
