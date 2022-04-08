import React, { FC } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// components etc
import { useAction } from '../hooks/useAction';
import { colors } from '../styles/vars';

export const Error: FC = () => {
  const { getAllChars } = useAction();

  return (
    <View style={styles.center}>
      <Text>Connection Error!</Text>
      <TouchableOpacity style={styles.btn} onPress={getAllChars}>
        <Text style={styles.btnTitle}>Try Again!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: colors.brown,
    margin: 10,
  },
  btnTitle: {
    fontWeight: 'bold',
    padding: 10,
    color: '#fff',
  },
});
