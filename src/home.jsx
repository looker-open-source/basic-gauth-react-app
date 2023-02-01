import React from 'react';
import { GoogleUserContext } from '.';

// This page is on https://embed.demo.com:3000
export const Home = (props) => {
    // This is your user's ID in the app.
    const [googleUserId] = React.useContext(GoogleUserContext)

    // Example fetch 
    fetch('exampleendpoint')
      .then((response) => response.json())
      .then((data) => console.log(data));

    return (
      <div>
        EMBED HERE
      </div>
    );
}