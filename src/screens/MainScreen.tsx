// libs
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, StyleSheet, FlatList } from 'react-native';
// components etc
import { RenderItem } from '../components/RenderItem';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IRenderItem } from '../interfaces';
import { RootStackParam } from '../RootNavigator';
import { colors } from '../styles/vars';
// BODY

type Props = NativeStackScreenProps<RootStackParam, 'BottomTabsStack'>;

export const MainScreen = ({ navigation }: Props) => {
  const { data } = useTypedSelector(store => store);

  let renderData = data.results!.map((char: any) => ({
    id: char.id,
    name: char.name,
    status: char.status,
    image: char.image,
  }));

  const renderItem = ({ item }: { item: IRenderItem }) => {
    return (
      <RenderItem
        item={item}
        onPress={id => navigation.navigate('ElementsStack', { screen: 'CharScreen', params: { name: item.name, id } })}
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
