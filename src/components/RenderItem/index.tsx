import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Color } from '../../styles';
import { ICharacter, TCharacterScreen } from '../../types';
import { styles } from './style';

type TProps = {
  character: ICharacter;
  onSelect: () => void;
  isFavorite: TCharacterScreen['isFavorite'];
  addToFav: (character: ICharacter) => void;
  removeFromFav: (character: ICharacter) => void;
};

export const RenderItem: FC<TProps> = ({ character, onSelect, isFavorite, addToFav, removeFromFav }) => {
  const handleOnSelect = () => onSelect();
  const handleOnPressFavoriteIcon = isFavorite ? () => removeFromFav(character) : () => addToFav(character);
  const iconName: string = isFavorite ? 'heart' : 'heart-outline';
  const iconColor: typeof Color[keyof typeof Color] = isFavorite ? Color.BROWN : Color.GREY_EA;

  return (
    <TouchableOpacity onPress={handleOnSelect}>
      <View style={styles.wrapper} key={character.id}>
        <View style={styles.imgWrapper}>
          <FastImage source={{ uri: character.image }} resizeMode="cover" style={styles.img} />
        </View>
        <View style={styles.infoWrapper}>
          <View>
            <Text style={styles.name}>{character.name}</Text>
            <View style={styles.statusBlock}>
              <Text style={styles.statusBold}>Status: </Text>
              <Text style={styles.status}>{character.status}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={handleOnPressFavoriteIcon}>
            <MaterialCommunityIcons name={iconName} size={30} color={iconColor} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};
