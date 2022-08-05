import React, { FC } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, FlatList } from 'react-native';
import { RenderItem } from '../../components/RenderItem';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useAction } from '../../hooks/useAction';
import { Loader } from '../../components/Loader';
import { ERoutes, ICharacter, TRootStackParam } from '../../types';
import { styles } from './styles';
import { ErrorNext } from '../../components/ErrorNext';

type TProps = NativeStackScreenProps<TRootStackParam, ERoutes.BOTTOM_TABS_STACK>;

export const MainScreen: FC<TProps> = ({ navigation }) => {
  const { data, favorites, loading, errorNext } = useTypedSelector(store => store.reducer);
  const { nextPage, addToFav, removeFromFav } = useAction();

  const renderData = data.results!.map((character: ICharacter) => {
    const { id, name, status, image, gender, origin, location } = character;
    return { id, name, status, image, gender, origin, location };
  });

  const renderItem = ({ item }: { item: ICharacter }) => {
    const isFavorite = !!favorites.filter((favItem: any) => favItem.id === item.id).length;
    const handleOnSelect = () =>
      navigation.navigate(ERoutes.ELEMENTS_STACK, { screen: ERoutes.CHARACTER_SCREEN, params: { character: item } });

    return (
      <RenderItem
        character={item}
        onSelect={handleOnSelect}
        isFavorite={isFavorite}
        addToFav={addToFav}
        removeFromFav={removeFromFav}
        key={item.id}
      />
    );
  };

  const handleKeyExtractor = (item: ICharacter, index: number) => item.id.toString() + index;
  const listFooterComponent = loading ? <Loader /> : null;
  const handleOnEndReached = () => (errorNext ? () => {} : nextPage(data.info.next));

  return (
    <View style={styles.center}>
      <FlatList
        data={renderData}
        renderItem={renderItem}
        keyExtractor={handleKeyExtractor}
        ListFooterComponent={listFooterComponent}
        onEndReachedThreshold={0.5}
        onEndReached={handleOnEndReached}
        maxToRenderPerBatch={20}
        updateCellsBatchingPeriod={200}
        initialNumToRender={10}
      />
      {errorNext && <ErrorNext uri={data.info.next} />}
    </View>
  );
};
