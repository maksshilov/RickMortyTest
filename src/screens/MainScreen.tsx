// libs
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, StyleSheet, FlatList } from 'react-native';
// components etc
import { IRenderItem, RenderItem } from '../components/RenderItem';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { RootStackParam } from '../RootNavigator';
import { colors } from '../styles/vars';
// BODY

type Props = NativeStackScreenProps<RootStackParam, 'BottomTabsStack'>;

export const MainScreen = ({ navigation }: Props) => {
  const { data, favorites } = useTypedSelector(store => store.reducer);

  let renderData = data.results!.map((char: any) => ({
    id: char.id,
    name: char.name,
    status: char.status,
    image: char.image,
    gender: char.gender,
    origin: char.origin.name,
    location: char.location.name,
  }));

  const renderItem = ({ item }: { item: IRenderItem }) => {
    const isFavorite = !!favorites.filter((favItem: any) => favItem.id === item.id).length;
    console.log(`isFavorite ${item.id}?`, isFavorite);
    return (
      <RenderItem
        item={item}
        onSelect={() => navigation.navigate('ElementsStack', { screen: 'CharScreen', params: item })}
        isFavorite={isFavorite}
      />
    );
  };

  return (
    <View style={styles.center}>
      <FlatList data={renderData} renderItem={renderItem} />
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
  btn: {
    backgroundColor: colors.paleOrange,
    padding: 10,
    borderRadius: 10,
  },
});
2;
