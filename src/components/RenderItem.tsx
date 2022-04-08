import React, { FC } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// src
import { windowWidth } from '../styles/vars';
import { IRenderItem } from '../interfaces';
// BODY

type Props = {
  item: IRenderItem;
  onPress: (id: number) => void;
};

export const RenderItem: FC<Props> = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(item.id)}>
      <View style={styles.wrapper} key={item.id}>
        <View style={styles.imgWrapper}>
          <Image source={{ uri: item.image }} resizeMode="cover" style={styles.img} />
        </View>
        <View style={styles.infoWrapper}>
          <View>
            <Text style={styles.name}>{item.name}</Text>
            <View style={styles.statusBlock}>
              <Text style={styles.statusBold}>Status: </Text>
              <Text style={styles.status}>{item.status}</Text>
            </View>
          </View>
          <TouchableOpacity>
            <MaterialCommunityIcons name="heart-outline" size={30} />
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
    fontWeight: 'bold',
    fontSize: 30,
  },
  statusBlock: {
    flexDirection: 'row',
  },
  statusBold: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  status: {
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
