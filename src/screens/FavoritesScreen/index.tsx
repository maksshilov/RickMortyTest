import React, { FC } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import FastImage from 'react-native-fast-image';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { styles } from './styles';
import { ERoutes, ICharacter, TRootStackParam } from '../../types';

type TProps = NativeStackScreenProps<TRootStackParam, ERoutes.BOTTOM_TABS_STACK>;

export const FavoritesScreen: FC<TProps> = ({ navigation }) => {
  const { favorites } = useTypedSelector(store => store.reducer);

  const renderItem = ({ item: character }: { item: ICharacter }) => {
    return (
      <TouchableOpacity
        style={styles.wrapper}
        onPress={() =>
          navigation.navigate(ERoutes.ELEMENTS_STACK, {
            screen: ERoutes.CHARACTER_SCREEN,
            params: { character },
          })
        }>
        <View key={character.id} style={styles.imgWrapper}>
          <FastImage source={{ uri: character.image }} style={styles.img} resizeMode={'cover'} />
          <Text style={styles.name}>{character.name}</Text>
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
