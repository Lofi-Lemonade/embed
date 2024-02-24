import 'babel-polyfill'

import client from '@lib/apollo'
import * as Sentry from '@sentry/browser';
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'

import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './app'

import register, { unregister } from './registerServiceWorker'

if (!window.location.hostname.includes(`127.0.0.1`) && !window.location.hostname.includes(`localhost`))
    Sentry.init({dsn: 'https://bb6efb5ab2724b168b5c06009093e52e@bugs.widgetbot.co/4'});

// Render App
ReactDOM.render(
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloHooksProvider>
  </ApolloProvider>,
  document.getElementById('root')
);

// Hot reloading
declare const module: any;
if (module.hot) {
    unregister();
    module.hot.accept()
} else {
    register();
}
