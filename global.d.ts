import 'redux';
import 'react-redux';

import { Task } from 'redux-saga';

import { Kakao } from '@/interfaces';
import { RootState } from '@/store';

declare module 'redux' {
  export interface Store {
    sagaTask?: Task;
  }
}

declare module 'react-redux' {
  export interface DefaultRootState extends RootState {}
}

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    ChannelIO: any;
    attachEvent: any;
    ChannelIOInitialized: any;
    Kakao: Kakao;
  }
}
