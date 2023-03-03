import { IHomeInitialState } from '@/interfaces';
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IHomeInitialState = {
  isLoading: false,
  modals: { test: false },
};

const slice = createSlice({
  name: 'homeReducer',
  initialState,
  reducers: {
    setIsLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload;
    },
    openModal: (
      state,
      { payload }: PayloadAction<keyof IHomeInitialState['modals']>
    ) => {
      state.modals[payload] = true;
    },
    closeModal: (state, __: PayloadAction) => {
      state.modals = {
        test: false,
      };
    },
    getAllInitial: (_, __: PayloadAction) => {},
  },
});

export const selectHomeState = createSelector(
  (state: IHomeInitialState) => state.isLoading,
  (state: IHomeInitialState) => state.modals,
  (isLoading, modals) => {
    return {
      isLoading,
      modals,
    };
  }
);

export const home = slice.name;
export const homeReducer = slice.reducer;
export const homeActions = slice.actions;

export default homeReducer;
