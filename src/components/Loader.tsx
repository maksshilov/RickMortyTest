import React, { FC } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
// src
import { colors } from '../styles/vars';
// BODY

export const Loader: FC = () => (
  <View style={styles.center}>
    <ActivityIndicator color={colors.brown} size={40} />
  </View>
);

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
