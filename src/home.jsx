import React from 'react'
import { GoogleUserConsumer } from './context.js'
import { LookerEmbedSDK } from '@looker/embed-sdk'

export class Home extends React.Component {
  constructor (props) {
    super(props)
    this.embedDivRef = React.createRef()
  }

  // This function is all you need to care about
  // ADD EMBEDDING CODE TO THIS FUNCTION ONLY
  componentDidMount() {
    // This page is on https://embed.demo.com:3000/home

    // This is your user's ID in the app.
    console.log(this.props.googleUserId)

    // Your embed div's id is "embedDivId" 
    const node = this.embedDivRef.current 
    node.id = "embedDivId"

    // ADD CODE HERE
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