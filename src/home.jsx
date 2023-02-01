import React from 'react'
import { GoogleUserContext } from '.'

// This page is on https://embed.demo.com:3000
export class Home extends React.Component {
    constructor (props) {
      super(props)
      this.embedDivRef = React.createRef()

       // This is your user's ID in the app.
      this.googleUserId = React.useContext(GoogleUserContext)

      // Example fetch 
      fetch('exampleendpoint')
        .then((response) => response.json())
        .then((data) => console.log(data))
    }
    render () {
      return (
        <div ref={this.embedDivRef}/>
      )
    }
}
