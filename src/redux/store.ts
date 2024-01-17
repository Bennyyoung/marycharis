import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"
import { SetDarkModeAction } from './actionTypes/DarkModeActionTypes';
import DarkModeReducer from './reducers/DarkModeReducer';
import LanguageModeReducer from './reducers/LanguageModeReducer';
import { SetLangModeAction } from './actionTypes/LanguageModeActionTypes';

// Define your RootState and Action Types
export type RootType = ReturnType<typeof rootReducer>
export type RootAction = SetDarkModeAction | SetLangModeAction

// Combine multiple reducers
const rootReducer = combineReducers({
  darkMode: DarkModeReducer,
  languageMode: LanguageModeReducer
})

// Configuration for Redux persist
const persistConfig = {
  key: 'root', // This would be the key in the local storage
  storage
}
export type RootState = ReturnType<typeof rootReducer>; // Define RootState type based on the rootReducer

// Create a persisted reducer using the persisted reducer function
// @ts-ignore
const persistedReducer = persistReducer<RootState, RootAction>(persistConfig, rootReducer)


export const store = configureStore({
  reducer: persistedReducer, // Pass your combined reducer here
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
});
// @ts-ignore
export const persistor = persistStore(store)

