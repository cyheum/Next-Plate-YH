import { useSelector } from 'react-redux';

import { RootState, selectHomeState } from '@/store';

function UseGetRootState() {
  const rootState = useSelector((rootState: RootState) => rootState);
  return rootState;
}

//store 값을 가져오는 함수
export const useGetStore = {
  home: () => selectHomeState(UseGetRootState().home),
};
