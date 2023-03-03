import { combineReducers } from '@reduxjs/toolkit';
import { routerReducer } from 'connected-next-router';
import home from './modules/home';

const rootReducer = combineReducers({
  router: routerReducer,
  home,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

// configure
export * from './configureStore';

// modules
export * from './modules/home';
