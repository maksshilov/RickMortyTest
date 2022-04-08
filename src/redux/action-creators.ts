import { Dispatch } from 'redux';
// components etc
import { ActionTypes, Action } from './types';
import RimApi from '../api/RimApi';
import { Selected } from '../interfaces';
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

export const getChar = (id: number) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({ type: ActionTypes.SET_LOADING, loading: true });

      const response = await rimApi.getChar(id);
      let selected = await response.json();

      selected = selected.forEach(
        (char: any): Selected => ({
          name: char.name,
          status: char.status,
          photo: char.image,
          gender: char.gender,
          origin: char.origin.name,
          location: char.location.name,
        })
      );

      console.log(selected);

      // dispatch({ type: ActionTypes.SELECT_CHAR, selected });
      dispatch({ type: ActionTypes.SET_LOADING, loading: false });
    } catch (error) {
      dispatch({ type: ActionTypes.SET_LOADING, loading: false });
      dispatch({ type: ActionTypes.SET_ERROR, error: true });
    }
  };
};
