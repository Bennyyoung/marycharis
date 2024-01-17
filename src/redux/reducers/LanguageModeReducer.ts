// reducers.ts
import { LanguageModeActionTypes, SET_LANGUAGE_MODE } from '../actionTypes/LanguageModeActionTypes';

interface LanguageModeState {
  languageMode: string;
}

const initialState: LanguageModeState = {
  languageMode: 'en',
};

const LanguageModeReducer = (state: LanguageModeState = initialState, action: LanguageModeActionTypes): LanguageModeState => {
  switch (action.type) {
    case SET_LANGUAGE_MODE:
      return {
        ...state,
        languageMode: action.payload,
      };
    default:
      return state;
  }
};

export default LanguageModeReducer;
