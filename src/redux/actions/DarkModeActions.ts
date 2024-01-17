// actions.js
import { SET_DARK_MODE } from '../actionTypes/DarkModeActionTypes';

export const setDarkMode = (isDarkMode: boolean) => {
  return {
    type: SET_DARK_MODE,
    payload: isDarkMode,
  };
};
