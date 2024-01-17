// reducers.ts
import { DarkModeActionTypes, SET_DARK_MODE } from '../actionTypes/DarkModeActionTypes';

interface DarkModeState {
  darkMode: boolean;
}

const initialState: DarkModeState = {
  darkMode: false,
};

const DarkModeReducer = (state: DarkModeState = initialState, action: DarkModeActionTypes): DarkModeState => {
  switch (action.type) {
    case SET_DARK_MODE:
      return {
        ...state,
        darkMode: action.payload,
      };
    default:
      return state;
  }
};

export default DarkModeReducer;
