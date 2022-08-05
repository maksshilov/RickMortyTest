import { StyleSheet } from 'react-native';
import { Color, Font, windowWidth } from '../../../styles';

export const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Color.WHITE,
  },
  wrapper: {
    width: windowWidth * 0.5,
    height: windowWidth * 0.68,
    padding: windowWidth * 0.02,
  },
  imgWrapper: {
    width: '100%',
    height: windowWidth * 0.5,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  name: {
    margin: 10,
    fontFamily: Font.BOLD,
    fontSize: 15,
    color: Color.GREY_B,
  },
  emptyText: {
    textAlign: 'center',
    fontFamily: Font.BOLD,
    fontSize: 20,
  },
});
