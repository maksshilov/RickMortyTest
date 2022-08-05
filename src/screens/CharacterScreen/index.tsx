import React, { FC, useEffect } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import FastImage from 'react-native-fast-image';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { CardLabel } from '../../components/CardLabel';
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Color } from '../../styles';
import { styles } from './styles';
import { ECardLabel, TElementsStackParam, ERoutes, ICharacter } from '../../types';

type TProps = NativeStackScreenProps<TElementsStackParam, ERoutes.CHARACTER_SCREEN>;

export const CharacterScreen: FC<TProps> = ({ route, navigation }) => {
  const { character } = route.params;
  const { name, gender, status, origin, location, image } = character;

  const { favorites } = useTypedSelector(store => store.reducer);
  const isFavorite = !!favorites.filter((favorite: ICharacter) => favorite.id === character.id).length;

  const { addToFav, removeFromFav } = useAction();

  useEffect(() => navigation.setOptions({ title: name }), [navigation, name]);

  const handleOnPressFavoriteIcon = isFavorite ? () => removeFromFav(character) : () => addToFav(character);
  const iconName = isFavorite ? 'heart' : 'heart-outline';
  const iconColor = isFavorite ? Color.BROWN : Color.GREY_EA;

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.center}>
        <View style={styles.imgWrapper}>
          <FastImage source={{ uri: image }} style={styles.img} />
          <TouchableOpacity onPress={handleOnPressFavoriteIcon}>
            <MaterialCommunityIcons style={styles.icon} name={iconName} size={50} color={iconColor} />
          </TouchableOpacity>
        </View>
        <View style={styles.separator} />
        <CardLabel label={ECardLabel.NAME} value={name} />
        <CardLabel label={ECardLabel.STATUS} value={status} />
        <CardLabel label={ECardLabel.GENDER} value={gender} />
        <CardLabel label={ECardLabel.ORIGIN_PLANET} value={origin.name} />
        <CardLabel label={ECardLabel.LOCATION_PLANET} value={location.name} />
      </View>
    </ScrollView>
  );
};
