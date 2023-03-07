import { configureStore, Store } from '@reduxjs/toolkit';
import {
  createRouterMiddleware,
  initialRouterState,
} from 'connected-next-router';
import Router from 'next/router';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import logger from 'redux-logger';
import createSagaMiddleware, { Task } from 'redux-saga';

import rootReducer, { RootState } from './';
import rootSaga from './sagas';

export interface SagaStore extends Store {
  sagaTask?: Task;
}

const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    if (state.count) nextState.count = state.count;
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

export const makeStore = (context) => {
  const sagaMiddleware = createSagaMiddleware();
  const routerMiddleware = createRouterMiddleware();
  const { asPath } = context.ctx || Router.router || {};
  let initialState;
  if (asPath) {
    initialState = {
      router: initialRouterState(asPath),
    };
  }

  const isProduct = process.env.NEXT_PUBLIC_ENVIROMENT === 'production';

  const store = configureStore({
    reducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        isProduct
          ? [sagaMiddleware, routerMiddleware]
          : [sagaMiddleware, routerMiddleware, logger]
      ),
    devTools: !isProduct,
  });

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper<Store<RootState>>(makeStore, {
  debug: false,
});
