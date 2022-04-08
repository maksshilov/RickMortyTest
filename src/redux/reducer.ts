import { IState } from '../interfaces';
import { Action, ActionTypes } from './types';

const initialState: IState = {
  loading: false,
  error: false,
  data: { results: [] },
};

export const reducer = (state = initialState, action: Action): IState => {
  switch (action.type) {
    case ActionTypes.SET_DATA:
      return { ...state, data: action.data };
    case ActionTypes.SET_LOADING:
      return { ...state, loading: action.loading };
    case ActionTypes.SET_ERROR:
      return { ...state, error: action.error };
    case ActionTypes.SELECT_CHAR:
      return { ...state };
    default:
      return state;
  }
};
