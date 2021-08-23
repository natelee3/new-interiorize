import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import env from 'react-dotenv';

ReactDOM.render(
  <Auth0Provider
  domain={env.DOMAIN}
  clientId={env.CLIENT_ID}
  redirectUri={window.location.origin}
  audience={env.API_URL}
  useRefreshTokens={true}
  > 
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById('root')
);

