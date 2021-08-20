import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <Auth0Provider
  domain="dev-mxp9kyux.us.auth0.com"
  clientId="3ES3hcajfSgsBfCqU5dktrO4kYokrMiX"
  redirectUri={window.location.origin}
  audience="https://api.interiorize.design"
  useRefreshTokens={true}
  > 
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById('root')
);

