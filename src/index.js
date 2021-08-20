import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <Auth0Provider
  domain={window.env.DOMAIN}
  clientId={window.env.CLIENT_ID}
  redirectUri={window.location.origin}
  audience={window.env.API_URL}
  useRefreshTokens={true}
  > 
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById('root')
);

