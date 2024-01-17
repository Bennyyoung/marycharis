// actionTypes.ts
export const SET_LANGUAGE_MODE = 'SET_LANGUAGE_MODE';

export interface SetLangModeAction {
  type: typeof SET_LANGUAGE_MODE;
  payload: string;
}

export type LanguageModeActionTypes = SetLangModeAction;
