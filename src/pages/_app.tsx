// import '../styles/global.css';
import type { AppProps } from 'next/app';
import { wrapper } from '@/store';
import { ConnectedRouter } from 'connected-next-router';
import { InitialComponent } from '@/components';
import { Provider } from 'react-redux';

const App: React.FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <>
      <Provider store={store}>
        <ConnectedRouter>
          <InitialComponent />
          <Component {...props.pageProps} />
        </ConnectedRouter>
      </Provider>
    </>
  );
};

export default App;
