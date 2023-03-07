import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Spinner } from '@/components';
import { useGetStore } from '@/hooks';
import { homeActions } from '@/store';

export const InitialComponent: React.FC = () => {
  const { isLoading } = useGetStore.home();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(homeActions.getAllInitial());
  }, [dispatch]);

  return <>{isLoading && <Spinner />}</>;
};
