import { IRenderItem } from '../components/RenderItem';

export enum ActionTypes {
  SET_DATA = 'SET_DATA',
  SET_LOADING = 'SET_LOADING',
  SET_ERROR = 'SET_ERROR',
  ADD_TO_FAV = 'ADD_TO_FAV',
  REMOVE_FROM_FAV = 'REMOVE_FROM_FAV',
}

interface ISetData {
  type: ActionTypes.SET_DATA;
  data: any[];
}
interface ISetLoading {
  type: ActionTypes.SET_LOADING;
  loading: boolean;
}
interface ISetError {
  type: ActionTypes.SET_ERROR;
  error: boolean;
}
interface IAddToFav {
  type: ActionTypes.ADD_TO_FAV;
  favorites: IRenderItem;
}
interface IRemoveFromFav {
  type: ActionTypes.REMOVE_FROM_FAV;
  favorites: IRenderItem;
}

export type Action = ISetData | ISetError | ISetLoading | IAddToFav | IRemoveFromFav;
