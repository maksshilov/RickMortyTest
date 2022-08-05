import { StyleSheet } from 'react-native';
import { Color } from '../../../styles';

export const styles = StyleSheet.create({
  center: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.WHITE,
  },
  btn: {
    backgroundColor: Color.PALEORANGE,
    padding: 10,
    borderRadius: 10,
  },
});
