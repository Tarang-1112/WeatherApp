import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import rootReducer from './RootReducer';

const middlewares = getDefaultMiddleware({serializableCheck: false});

export const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
