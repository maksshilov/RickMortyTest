import { ICharacter } from '../types';

export enum ActionTypes {
  SET_DATA = 'SET_DATA',
  NEXT_PAGE = 'NEXT_PAGE',
  SET_LOADING = 'SET_LOADING',
  SET_ERROR = 'SET_ERROR',
  SET_ERROR_NEXT = 'SET_ERROR_NEXT',
  ADD_TO_FAV = 'ADD_TO_FAV',
  REMOVE_FROM_FAV = 'REMOVE_FROM_FAV',
}

interface ISetData {
  type: ActionTypes.SET_DATA;
  data: any[];
}
interface INextPage {
  type: ActionTypes.NEXT_PAGE;
  data: { results: any[] };
}
interface ISetLoading {
  type: ActionTypes.SET_LOADING;
  loading: boolean;
}
interface ISetError {
  type: ActionTypes.SET_ERROR;
  error: boolean;
}
interface ISetErrorNext {
  type: ActionTypes.SET_ERROR_NEXT;
  errorNext: boolean;
}
interface IAddToFav {
  type: ActionTypes.ADD_TO_FAV;
  favorites: ICharacter;
}
interface IRemoveFromFav {
  type: ActionTypes.REMOVE_FROM_FAV;
  favorites: ICharacter;
}

export type Action = ISetData | INextPage | ISetError | ISetErrorNext | ISetLoading | IAddToFav | IRemoveFromFav;
