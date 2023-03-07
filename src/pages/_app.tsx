import { ConnectedRouter } from 'connected-next-router';
import { AppProps } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';

import { InitialComponent } from '@/components';
import { wrapper } from '@/store';

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
