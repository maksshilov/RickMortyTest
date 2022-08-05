import { Dispatch } from 'redux';
import { callApi } from '../services/callApi';
import { ICharacter } from '../types';
import { ActionTypes, Action } from './types';

export const getAllCharacters = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({ type: ActionTypes.SET_ERROR, error: false });
      dispatch({ type: ActionTypes.SET_LOADING, loading: true });
      const response = await callApi('/character');
      const data = await response.json();

      dispatch({ type: ActionTypes.SET_DATA, data });
      dispatch({ type: ActionTypes.SET_LOADING, loading: false });
    } catch (error) {
      console.log('error >>', error);
      dispatch({ type: ActionTypes.SET_LOADING, loading: false });
      dispatch({ type: ActionTypes.SET_ERROR, error: true });
    }
  };
};

export const nextPage = (uri: string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({ type: ActionTypes.SET_ERROR_NEXT, errorNext: false });
      dispatch({ type: ActionTypes.SET_LOADING, loading: true });
      const endpoint = '/' + uri.split('/').pop();
      const response = await callApi(endpoint!);
      const data = await response.json();

      dispatch({ type: ActionTypes.NEXT_PAGE, data });
      dispatch({ type: ActionTypes.SET_LOADING, loading: false });
    } catch (error) {
      dispatch({ type: ActionTypes.SET_LOADING, loading: false });
      dispatch({ type: ActionTypes.SET_ERROR_NEXT, errorNext: true });
    }
  };
};

export const addToFav = (item: ICharacter) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({ type: ActionTypes.SET_LOADING, loading: true });
      dispatch({ type: ActionTypes.ADD_TO_FAV, favorites: item });
      dispatch({ type: ActionTypes.SET_LOADING, loading: false });
    } catch (error) {
      dispatch({ type: ActionTypes.SET_LOADING, loading: false });
      dispatch({ type: ActionTypes.SET_ERROR, error: true });
    }
  };
};

export const removeFromFav = (item: ICharacter) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({ type: ActionTypes.SET_LOADING, loading: true });
      dispatch({ type: ActionTypes.REMOVE_FROM_FAV, favorites: item });
      dispatch({ type: ActionTypes.SET_LOADING, loading: false });
    } catch (error) {
      dispatch({ type: ActionTypes.SET_LOADING, loading: false });
      dispatch({ type: ActionTypes.SET_ERROR, error: true });
    }
  };
};
