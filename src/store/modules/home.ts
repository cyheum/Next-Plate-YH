import { IHomeInitialState } from '@/interfaces';
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IHomeInitialState = {
  test: true,
};

const slice = createSlice({
  name: 'homeReducer',
  initialState,
  reducers: {
    setTest: (state, { payload }: PayloadAction<IHomeInitialState['test']>) => {
      state.test = payload;
    },
    getTestData: (_, __) => {},
  },
});

export const selectHomeState = createSelector(
  (state: IHomeInitialState) => state.test,
  (test) => {
    return {
      test,
    };
  }
);

export const home = slice.name;
export const homeReducer = slice.reducer;
export const homeActions = slice.actions;

export default homeReducer;
