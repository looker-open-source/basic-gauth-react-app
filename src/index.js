import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from '@react-oauth/google';

const GoogleUserContext = React.createContext();

function Welcome(props) {
  return (
    <GoogleLogin
      onSuccess={credentialResponse => {
        console.log(credentialResponse);
      }}
      onError={() => {
        console.log('Login Failed');
      }}
    />
  );
}

function Home(props) {
  return (
    <div>
    home {React.useContext(GoogleUserContext)}
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
]);

const googleClientId = `${process.env.REACT_APP_GOOGLE_CLIENT_ID}.apps.googleusercontent.com`;

const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleUserContext.Provider value="Reed">
      <GoogleOAuthProvider clientId={googleClientId}>
        <RouterProvider router={router} />
      </GoogleOAuthProvider>
    </GoogleUserContext.Provider>
  </React.StrictMode>
);

fetch('/blah')
.then((response) => response.json())
.then((data) => alert(data));