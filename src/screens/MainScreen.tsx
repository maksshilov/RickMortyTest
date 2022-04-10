// libs
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, StyleSheet, FlatList } from 'react-native';
// src
import { IRenderItem, RenderItem } from '../components/RenderItem';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { RootStackParam } from '../RootNavigator';
import { colors } from '../styles/vars';
import { useAction } from '../hooks/useAction';
import { Loader } from '../components/Loader';
// BODY

type Props = NativeStackScreenProps<RootStackParam, 'BottomTabsStack'>;

export const MainScreen = ({ navigation }: Props) => {
  const { data, favorites, loading } = useTypedSelector(store => store.reducer);
  const { nextPage, addToFav, removeFromFav } = useAction();

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
    return (
      <RenderItem
        item={item}
        onSelect={() => navigation.navigate('ElementsStack', { screen: 'CharScreen', params: { item } })}
        isFavorite={isFavorite}
        addToFav={addToFav}
        removeFromFav={removeFromFav}
      />
    );
  };

  return (
    <View style={styles.center}>
      <FlatList
        data={renderData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ListFooterComponent={loading ? <Loader /> : null}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          nextPage(data.info.next);
        }}
      />
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
