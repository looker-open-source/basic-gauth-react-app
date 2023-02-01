import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';

const GoogleUserContext = React.createContext();

function Welcome(props) {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const userInfo = await fetch(
        'https://www.googleapis.com/oauth2/v3/userinfo',
        { headers: { Authorization: 'Bearer ' + tokenResponse.access_token } },
      );
      const response = await userInfo.json()
      console.log(response);
    },
    onError: errorResponse => console.log(errorResponse),
  });
  return (
    <button onClick={() => login()}>
      Sign in with Google 🚀{' '}
    </button>
  )
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
    <GoogleUserContext.Provider value="abcde12345">
      <GoogleOAuthProvider clientId={googleClientId}>
        <RouterProvider router={router} />
      </GoogleOAuthProvider>
    </GoogleUserContext.Provider>
  </React.StrictMode>
);

fetch('/blah')
.then((response) => response.json())
.then((data) => alert(data));