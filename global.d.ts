import 'redux';
import 'react-redux';
import { Task } from 'redux-saga';
import { RootState } from '@/store';
import { Kakao } from '@/interfaces';

declare module 'redux' {
  export interface Store {
    sagaTask?: Task;
  }
}

declare module 'react-redux' {
  export interface DefaultRootState extends RootState {}
}

declare global {
  interface Window {
    ChannelIO: any;
    attachEvent: any;
    ChannelIOInitialized: any;
    Kakao: Kakao;
  }
}
