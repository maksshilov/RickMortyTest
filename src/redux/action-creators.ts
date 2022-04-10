import { Dispatch } from 'redux';
// components etc
import RimApi from '../api/RimApi';
import { ActionTypes, Action } from './types';
import { IRenderItem } from '../components/RenderItem';
// BODY

const rimApi = new RimApi();

export const getAllChars = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({ type: ActionTypes.SET_LOADING, loading: true });
      const response = await rimApi.getAllChars();
      const data = await response.json();

      dispatch({ type: ActionTypes.SET_DATA, data });
      dispatch({ type: ActionTypes.SET_LOADING, loading: false });
    } catch (error) {
      dispatch({ type: ActionTypes.SET_LOADING, loading: false });
      dispatch({ type: ActionTypes.SET_ERROR, error: true });
    }
  };
};

export const nextPage = (uri: string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({ type: ActionTypes.SET_LOADING, loading: true });
      const response = await rimApi.getNextPage(uri);
      const data = await response.json();

      dispatch({ type: ActionTypes.NEXT_PAGE, data });
      dispatch({ type: ActionTypes.SET_LOADING, loading: false });
    } catch (error) {
      dispatch({ type: ActionTypes.SET_LOADING, loading: false });
      dispatch({ type: ActionTypes.SET_ERROR, error: true });
    }
  };
};

export const addToFav = (item: IRenderItem) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({ type: ActionTypes.SET_LOADING, loading: true });
      dispatch({ type: ActionTypes.ADD_TO_FAV, favorites: item });
      dispatch({ type: ActionTypes.SET_LOADING, loading: false });
    } catch (error) {
      console.log('addToFav ERROR:', error);
      dispatch({ type: ActionTypes.SET_LOADING, loading: false });
      dispatch({ type: ActionTypes.SET_ERROR, error: true });
    }
  };
};

export const removeFromFav = (item: IRenderItem) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({ type: ActionTypes.SET_LOADING, loading: true });
      dispatch({ type: ActionTypes.REMOVE_FROM_FAV, favorites: item });
      dispatch({ type: ActionTypes.SET_LOADING, loading: false });
    } catch (error) {
      console.log('addToFav ERROR:', error);
      dispatch({ type: ActionTypes.SET_LOADING, loading: false });
      dispatch({ type: ActionTypes.SET_ERROR, error: true });
    }
  };
};
