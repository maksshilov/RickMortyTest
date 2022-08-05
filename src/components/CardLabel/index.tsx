import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';

type TProps = {
  label: string;
  value: string;
};

export const CardLabel: FC<TProps> = ({ label, value }) => {
  return (
    <View style={styles.infoWrapper}>
      <View style={styles.textLeftWrapper}>
        <Text style={styles.textLeft}>{label}</Text>
      </View>
      <View style={styles.line} />
      <View style={styles.textRightWrapper}>
        <Text style={styles.textRight}>{value}</Text>
      </View>
    </View>
  );
};
