import React, { useEffect } from 'react';
import { useGetStore } from '@/hooks';
import { homeActions } from '@/store';
import { useDispatch } from 'react-redux';
import { Spinner } from '@/components';

export const InitialComponent: React.FC = () => {
  const { isLoading } = useGetStore.home();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(homeActions.getAllInitial());
  }, []);

  return <>{isLoading && <Spinner />}</>;
};
