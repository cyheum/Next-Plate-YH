import { combineReducers } from '@reduxjs/toolkit';
import home from './modules/home';

const rootReducer = combineReducers({
  home,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

// configure
export * from './configureStore';

// modules
export * from './modules/home';
