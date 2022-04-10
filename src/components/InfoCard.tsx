import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// BODY

type Props = {
  attr: string;
  value: string;
};

export function InfoCard({ attr: key, value }: Props) {
  return (
    <View style={styles.infoWrapper}>
      <View style={styles.textLeftWrapper}>
        <Text style={styles.textLeft}>{key}</Text>
      </View>
      <View style={styles.line} />
      <View style={styles.textRightWrapper}>
        <Text style={styles.textRight}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infoWrapper: {
    flexDirection: 'row',
    width: '100%',
    // backgroundColor: '#fff',
    // marginTop: 20,
  },
  textLeftWrapper: { width: '49%' },
  textRightWrapper: { width: '49%' },
  textLeft: {
    textAlign: 'right',
    fontFamily: 'OpenSans-Light',
    fontSize: 20,
    paddingHorizontal: '4%',
  },
  textRight: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
    paddingHorizontal: '4%',
  },
  line: {
    width: 1,
    backgroundColor: '#000',
  },
});
