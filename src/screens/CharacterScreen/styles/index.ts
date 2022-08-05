import { StyleSheet } from 'react-native';
import { Color, windowWidth } from '../../../styles';

export const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: Color.WHITE,
  },
  center: {
    flex: 1,
    alignItems: 'center',
  },
  imgWrapper: {
    position: 'relative',
  },
  img: {
    width: windowWidth,
    height: windowWidth,
  },
  icon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  separator: {
    height: windowWidth * 0.05,
  },
});
