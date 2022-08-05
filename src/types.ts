import { NavigatorScreenParams } from '@react-navigation/native';

export enum ERoutes {
  // Tabs
  MAIN_TAB = 'Main',
  FAVORITES_TAB = 'Favorites',

  // Screens
  CHARACTER_SCREEN = 'Character',

  // Stacks
  BOTTOM_TABS_STACK = 'BottomTabs',
  ELEMENTS_STACK = 'Elements',
}

export enum EConstants {
  ERROR_LABEL = 'Connection Error!',
  ERROR_BTN = 'Try Again!',
}

export enum ECardLabel {
  NAME = 'Name',
  STATUS = 'Status',
  GENDER = 'Gender',
  ORIGIN_PLANET = 'Origin planet',
  LOCATION_PLANET = 'Location planet',
}

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  image: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
}

export type TBottomTabsStackParams = {
  [ERoutes.MAIN_TAB]: undefined;
  [ERoutes.FAVORITES_TAB]: undefined;
};

export type TElementsStackParam = {
  [ERoutes.CHARACTER_SCREEN]: TCharacterScreen;
};

export type TCharacterScreen = {
  character: ICharacter;
  isFavorite?: boolean;
};

export type TRootStackParam = {
  [ERoutes.BOTTOM_TABS_STACK]: NavigatorScreenParams<TBottomTabsStackParams>;
  [ERoutes.ELEMENTS_STACK]: NavigatorScreenParams<TElementsStackParam>;
};
