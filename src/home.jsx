import React from 'react'
import { GoogleUserConsumer } from './context'

// This page is on https://embed.demo.com:3000
export class Home extends React.Component {
  constructor (props) {
    super(props)
    this.embedDivRef = React.createRef()

    // This is your user's ID in the app.
    console.log(this.props.googleUserId)

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

export const HomePage = () => (
  <GoogleUserConsumer>
    {(props) => {
      return <Home googleUserId={props.googleUserId}/>
    }}
  </GoogleUserConsumer>  
)