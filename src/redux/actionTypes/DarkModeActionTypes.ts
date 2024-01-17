// actionTypes.ts
export const SET_DARK_MODE = 'SET_DARK_MODE';

export interface SetDarkModeAction {
  type: typeof SET_DARK_MODE;
  payload: boolean;
}

export type DarkModeActionTypes = SetDarkModeAction;
