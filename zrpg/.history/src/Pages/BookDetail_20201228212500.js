import React, { Component } from 'react'
import config from './config'

class BookDetail extends Component {
  state = {
    titles: []
  };

//   const urlID =  
  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/books`)
    ])
      .then(([titleRes]) => {
        if (!titleRes.ok)
          return titleRes.json().then(e => Promise.reject(e))

        return Promise.all([
          titleRes.json()
        ])
      })
      .catch(error => {
        console.error({ error })
      })
  }
  

  render() {
      console.log(this.props.location)
  return(<div></div>)}
}

export default BookDetail

