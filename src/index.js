import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate
} from 'react-router-dom'
import './index.css'
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google'
import { HomePage } from './home'
import { GoogleUserContext } from './context'

const Welcome = (props) => {
  const { setGoogleUserId } = React.useContext(GoogleUserContext)
  const navigate = useNavigate()
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const userInfo = await fetch(
        'https://www.googleapis.com/oauth2/v3/userinfo',
        { headers: { Authorization: 'Bearer ' + tokenResponse.access_token } },
      )
      const response = await userInfo.json()
      setGoogleUserId(response.sub)
      navigate('/home')

    },
    onError: errorResponse => console.log(errorResponse),
  })
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
    element: <HomePage/>,
  },
])

const googleClientId = `${process.env.REACT_APP_GOOGLE_CLIENT_ID}.apps.googleusercontent.com`


class App extends React.Component {
  constructor(props) {
    super(props);

    this.setGoogleUserId = (id) => {
      this.setState(state => ({
        googleUserId: id
      }));
    };

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      googleUserId: "DEFAULT_GOOGLE_USER_ID",
      setGoogleUserId: this.setGoogleUserId,
    };
  }

  render () {
    return ( 
      <React.StrictMode>
        <GoogleUserContext.Provider value={this.state}>
          <GoogleOAuthProvider clientId={googleClientId}>
            <RouterProvider router={router} />
          </GoogleOAuthProvider>
        </GoogleUserContext.Provider>
      </React.StrictMode>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
