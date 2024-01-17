import { SET_LANGUAGE_MODE } from "../actionTypes/LanguageModeActionTypes";

// actions.js

export const setLanguageMode = (lng: string) => {
  return {
    type: SET_LANGUAGE_MODE,
    payload: lng,
  };
};