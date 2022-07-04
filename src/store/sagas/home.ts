import { takeEvery } from 'redux-saga/effects';
// import { GET } from '@/utils';
import { homeActions } from '..';
import { ActionType } from '@/interfaces';

export function* getTestDataSaga(_: ActionType) {
  try {
  } catch (err) {
    console.error(err);
  }
}

export function* watchGetTestData() {
  yield takeEvery(homeActions.getTestData, getTestDataSaga);
}

export default [watchGetTestData].map((fn) => fn());
