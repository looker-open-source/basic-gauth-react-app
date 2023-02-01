# Basic React App with Google Auth

This is a basic app built for the purpose of giving a simple sandbox react app where one can test embedding Looker. More info on some of the underlying concepts can be found below:
- [Reactjs.org's Intro to React Tutorial](https://reactjs.org/tutorial/tutorial.html) 
- [ExpressJS](https://expressjs.com/)
- [@react-oauth/google](https://www.npmjs.com/package/@react-oauth/google)
- [react-router](https://github.com/remix-run/react-router)

## Prerequisites

1. Install [Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
2. Install yarn - `npm install --global yarn`

## Installing the app
1. Clone this repo on your machine
2. `cd` into the newly created repository
3. Run `yarn install` to install dependencies
4. Create `.env` file in the top level of your cloned repo with the following contents:
```
DANGEROUSLY_DISABLE_HOST_CHECK=true
HTTPS=true
REACT_APP_GOOGLE_CLIENT_ID=
```
5. Fill in the `REACT_APP_GOOGLE_CLIENT_ID` with the client id from your GCP Auth project

## Modify hosts file
As sudo, modify `etc/hosts` on your machine to include the following entry:
  `127.0.0.1   embed.demo.com`
  
## Launch the app

- Run `npm run server` to start the Express server
- Run `npm start` in a separate terminal to start the app
- Your app should open in a new chrome window. Congrats!


## Disclaimer

This project is not an official Google project. It is not supported by Google and Google specifically disclaims all warranties as to its quality, merchantability, or fitness for a particular purpose.
