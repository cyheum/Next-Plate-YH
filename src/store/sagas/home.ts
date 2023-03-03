import { put, delay, takeEvery } from 'redux-saga/effects';
import { homeActions } from '..';
// import { GET } from '@/utils';
import { PayloadAction } from '@reduxjs/toolkit';

export function* getAllInitialSaga(_: PayloadAction) {
  try {
    yield put(homeActions.setIsLoading(true));
    console.log('saga is doing');
    yield delay(1000);
  } catch (err) {
    console.error(err);
  } finally {
    console.log('saga is done');
    yield put(homeActions.setIsLoading(false));
  }
}
export function* watchGetInitial() {
  yield takeEvery(homeActions.getAllInitial, getAllInitialSaga);
}

export default [watchGetInitial].map((fn) => fn());
