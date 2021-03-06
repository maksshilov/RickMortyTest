import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// src
import { colors, windowWidth } from '../styles/vars';
// BODY

export interface IRenderItem {
  id: number;
  name: string;
  status: string;
  image: string;
  gender: string;
  origin: string;
  location: string;
}

type Props = {
  item: IRenderItem;
  onSelect: () => void;
  isFavorite: boolean;
  addToFav: (item: IRenderItem) => void;
  removeFromFav: (item: IRenderItem) => void;
};

export const RenderItem = ({ item, onSelect, isFavorite, addToFav, removeFromFav }: Props) => {
  return (
    <TouchableOpacity onPress={() => onSelect()}>
      <View style={styles.wrapper} key={item.id}>
        <View style={styles.imgWrapper}>
          <FastImage source={{ uri: item.image }} resizeMode="cover" style={styles.img} />
        </View>
        <View style={styles.infoWrapper}>
          <View>
            <Text style={styles.name}>{item.name}</Text>
            <View style={styles.statusBlock}>
              <Text style={styles.statusBold}>Status: </Text>
              <Text style={styles.status}>{item.status}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={isFavorite ? () => removeFromFav(item) : () => addToFav(item)}>
            <MaterialCommunityIcons
              name={isFavorite ? 'heart' : 'heart-outline'}
              size={30}
              color={isFavorite ? colors.brown : colors.grey}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: windowWidth * 0.9,
    borderWidth: 1,
    borderColor: '#bbb',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoWrapper: {
    padding: 15,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 30,
  },
  statusBlock: {
    flexDirection: 'row',
  },
  statusBold: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
  },
  status: {
    fontFamily: 'OpenSans-Medium',
    fontSize: 20,
  },
  imgWrapper: {
    width: windowWidth * 0.9,
    height: windowWidth * 0.9,
    // margin: 10,
  },
  img: {
    width: '100%',
    height: '100%',
  },
});
