import React, { FC } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { center, Color } from '../../styles';

export const Loader: FC = () => (
  <View style={[center, { backgroundColor: Color.WHITE }]}>
    <ActivityIndicator color={Color.BROWN} size={40} />
  </View>
);
