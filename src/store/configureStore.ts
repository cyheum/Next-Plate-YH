import { configureStore } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './';
import rootSaga from './sagas';

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

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const isProduct = process.env.NODE_ENV === 'production';

  const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        isProduct ? [sagaMiddleware] : [sagaMiddleware, logger]
      ),
    devTools: !isProduct,
  });

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(makeStore, { debug: false });
