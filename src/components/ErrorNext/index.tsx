import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useAction } from '../../hooks/useAction';
import { EConstants } from '../../types';
import { styles } from './style';

type TProps = {
  uri: string;
};

export const ErrorNext: FC<TProps> = ({ uri }) => {
  const { nextPage } = useAction();

  const handleNextPage = () => nextPage(uri);

  return (
    <View style={styles.bg}>
      <View style={styles.wrapper}>
        <Text style={styles.label}>{EConstants.ERROR_LABEL}</Text>
        <TouchableOpacity style={styles.btn} onPress={handleNextPage}>
          <Text style={styles.btnTitle}>{EConstants.ERROR_BTN}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
