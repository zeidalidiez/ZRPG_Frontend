import React, { Component } from 'react'
import config from '../config'

class BookDetail extends Component {
  state = {
    book: null
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
      .then( (data) => this.setState({book:data}))
      .catch(error => {
        console.error({ error })
      })
  }
  

  render() {
  return(<div>
      Test text 
  </div>)}
}

export default BookDetail

