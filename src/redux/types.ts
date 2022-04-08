import { Selected } from '../interfaces';

export enum ActionTypes {
  SET_DATA = 'SET_DATA',
  SET_LOADING = 'SET_LOADING',
  SET_ERROR = 'SET_ERROR',
  SELECT_CHAR = 'SELECT_CHAR',
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

interface ISelectChar {
  type: ActionTypes.SELECT_CHAR;
  selected: Selected;
}

export type Action = ISetData | ISetError | ISetLoading | ISelectChar;
