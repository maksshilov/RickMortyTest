import { StyleSheet } from 'react-native';
import { Color, Font } from '../../../styles';

export const styles = StyleSheet.create({
  infoWrapper: {
    flexDirection: 'row',
    width: '100%',
  },
  textLeftWrapper: {
    width: '49%',
  },
  textRightWrapper: {
    width: '49%',
  },
  textLeft: {
    textAlign: 'right',
    fontFamily: Font.LIGHT,
    fontSize: 20,
    paddingHorizontal: '4%',
    color: Color.GREY_B,
  },
  textRight: {
    fontFamily: Font.BOLD,
    fontSize: 20,
    paddingHorizontal: '4%',
    color: Color.GREY_B,
  },
  line: {
    width: 1,
    backgroundColor: Color.BLACK,
  },
});
