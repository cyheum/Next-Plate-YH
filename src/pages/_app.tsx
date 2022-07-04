// import '../styles/global.css';
import type { AppProps } from 'next/app';
import { GlobalStyle } from '@/styles';
import withReduxSaga from 'next-redux-saga';
import { wrapper } from '@/store/configureStore';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(withReduxSaga(App));
