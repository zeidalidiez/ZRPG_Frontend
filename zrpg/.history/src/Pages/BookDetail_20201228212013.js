import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import BookListMain from './Pages/BookListMain'
import BookPageMain from './Pages/BookPageMain'
import AddTitle from './Pages/AddItem'
import ApiContext from './ApiContext'
import config from './config'

class BookDetail extends Component {
  state = {
    titles: []
  };

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
  return(<div></div>)}
}

export default BookDetail

