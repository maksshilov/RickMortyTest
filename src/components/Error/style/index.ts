import { StyleSheet } from 'react-native';
import { Color, Font } from '../../../styles';

export const styles = StyleSheet.create({
  label: {
    fontFamily: Font.REGULAR,
    color: Color.BLACK,
  },
  btn: {
    backgroundColor: Color.BROWN,
    margin: 10,
  },
  btnTitle: {
    fontFamily: Font.BOLD,
    padding: 10,
    color: Color.WHITE,
  },
});
