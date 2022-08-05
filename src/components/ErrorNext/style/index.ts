import { StyleSheet } from 'react-native';
import { Color, Font } from '../../../styles';

export const styles = StyleSheet.create({
  bg: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: '100%',
  },
  wrapper: {
    backgroundColor: Color.WHITE,
    padding: 20,
    borderRadius: 10,
  },
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
    color: Color.WHITE,
    padding: 10,
  },
});
