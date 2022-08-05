import { Dimensions, StyleProp, TextStyle, ViewStyle } from 'react-native';
export const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

export enum Color {
  BLUE = '#2F4368',
  YELLOW = '#FAF76B',
  BROWN = '#87501F',
  PALEORANGE = '#F7C49D',
  GREY_EA = '#EAEAEA',
  WHITE = '#fff',
  GREY_B = '#bbb',
  BLACK = '#000',
}

export enum Font {
  BOLD = 'OpenSans-Bold',
  LIGHT = 'OpenSans-Light',
  MEDIUM = 'OpenSans-Medium',
  REGULAR = 'OpenSans-Regular',
}

export const center: StyleProp<ViewStyle> = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
};

export const tabLabel: StyleProp<TextStyle> = {
  fontFamily: Font.BOLD,
  fontSize: 13,
};
