import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {

    // Configure Auth0 provider
    const domain = process.env.REACT_APP_AUTH0_DOMAIN;
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

    // Gets history object from React router
    const history = useHistory();

    // Handles event where Auth0 redirects users from Auth0 Universal Login to your React app
    // history.push() takes users back to the route they intended to access before authentication
    const onRedirectCallback = (appState) => {
        history.push(appState?.returnTo || window.location.pathname);
    };

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    );
};

// wrapping any component tree with Auth0ProviderWithHistory will give access to the Auth0Context
export default Auth0ProviderWithHistory;