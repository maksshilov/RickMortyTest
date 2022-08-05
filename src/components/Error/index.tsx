import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useAction } from '../../hooks/useAction';
import { center, Color } from '../../styles';
import { EConstants } from '../../types';
import { styles } from './style';

export const Error: FC = () => {
  const { getAllCharacters } = useAction();

  return (
    <View style={[center, { backgroundColor: Color.WHITE }]}>
      <Text style={{}}>{EConstants.ERROR_LABEL}</Text>
      <TouchableOpacity style={styles.btn} onPress={getAllCharacters}>
        <Text style={styles.btnTitle}>{EConstants.ERROR_BTN}</Text>
      </TouchableOpacity>
    </View>
  );
};
