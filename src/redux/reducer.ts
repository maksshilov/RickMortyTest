import { Action, ActionTypes } from './types';

export type Selected = {
  name: string;
  status: string;
  photo: string;
  gender: string;
  origin: string;
  location: string;
};

interface IState {
  loading: boolean;
  error: boolean;
  errorNext: boolean;
  data: { info: any; results: any[] } | any;
  favorites?: any;
}

const initialState: IState = {
  loading: false,
  error: false,
  errorNext: false,
  data: { info: {}, results: [] },
  favorites: [],
};

export const reducer = (state = initialState, action: Action): IState => {
  switch (action.type) {
    case ActionTypes.SET_DATA:
      return { ...state, data: action.data };

    case ActionTypes.NEXT_PAGE:
      return {
        ...state,
        data: { ...state.data, ...action.data, results: [...state.data.results, ...action.data.results] },
      };
    case ActionTypes.SET_LOADING:
      return { ...state, loading: action.loading };

    case ActionTypes.SET_ERROR:
      return { ...state, error: action.error };

    case ActionTypes.SET_ERROR_NEXT: {
      return { ...state, errorNext: action.errorNext };
    }

    case ActionTypes.ADD_TO_FAV:
      return { ...state, favorites: [...state.favorites, action.favorites] };

    case ActionTypes.REMOVE_FROM_FAV:
      let newFavorites = state.favorites.filter((favItem: any) => favItem.id !== action.favorites.id);
      return { ...state, favorites: newFavorites };
    default:
      return state;
  }
};
