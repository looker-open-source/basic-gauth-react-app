import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate
} from 'react-router-dom';
import './index.css';
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import { Home } from './home'

export const GoogleUserContext = React.createContext()

const Welcome = (props) => {
  const [_, setGoogleUserContext] = React.useContext(GoogleUserContext)
  const navigate = useNavigate()
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const userInfo = await fetch(
        'https://www.googleapis.com/oauth2/v3/userinfo',
        { headers: { Authorization: 'Bearer ' + tokenResponse.access_token } },
      );
      const response = await userInfo.json()
      setGoogleUserContext(response.sub)
      navigate('/home')

    },
    onError: errorResponse => console.log(errorResponse),
  });
  return (
    <button onClick={() => login()}>
      Sign in with Google 🚀
    </button>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Welcome/>,
  },
  {
    path: '/home',
    element: <Home/>,
  },
]);

const googleClientId = `${process.env.REACT_APP_GOOGLE_CLIENT_ID}.apps.googleusercontent.com`;

function App(props) {
  const [googleUserContext, setGoogleUserContext] = React.useState('DEFAULT_GOOGLE_USER_ID');

  return ( 
    <React.StrictMode>
      <GoogleUserContext.Provider value={[googleUserContext, setGoogleUserContext]}>
        <GoogleOAuthProvider clientId={googleClientId}>
          <RouterProvider router={router} />
        </GoogleOAuthProvider>
      </GoogleUserContext.Provider>
    </React.StrictMode>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);
