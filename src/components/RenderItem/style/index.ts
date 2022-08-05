import { StyleSheet } from 'react-native';
import { Color, Font, windowWidth } from '../../../styles';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: windowWidth * 0.9,
    borderWidth: 1,
    borderColor: Color.GREY_B,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoWrapper: {
    padding: 15,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontFamily: Font.BOLD,
    fontSize: 30,
    color: Color.GREY_B,
  },
  statusBlock: {
    flexDirection: 'row',
  },
  statusBold: {
    fontFamily: Font.BOLD,
    fontSize: 20,
    color: Color.GREY_B,
  },
  status: {
    fontFamily: Font.MEDIUM,
    fontSize: 20,
    color: Color.GREY_B,
  },
  imgWrapper: {
    width: windowWidth * 0.9,
    height: windowWidth * 0.9,
  },
  img: {
    width: '100%',
    height: '100%',
  },
});
