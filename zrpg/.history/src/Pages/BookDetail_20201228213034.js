import React, { Component } from 'react'
import config from '../config'

class BookDetail extends Component {
  state = {
    titles: []
  };

//   const urlID =  
  componentDidMount() {
    let urlID = this.props.location.pathname
    Promise.all([
      fetch(`${config.API_ENDPOINT+urlID}`)
    ])
      .then(([titleRes]) => {
        if (!titleRes.ok)
          return titleRes.json().then(e => Promise.reject(e))

        return Promise.all([
          titleRes.json()
        ])
      })
      .then( (data) => console.log(data))
      .catch(error => {
        console.error({ error })
      })
  }
  

  render() {
      console.log(this.props.location)
  return(<div></div>)}
}

export default BookDetail

