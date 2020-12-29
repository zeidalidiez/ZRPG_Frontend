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
    const value = {
      titles: this.state.titles,
      addTitle: this.handleAddTitle,
      deleteTitle: this.handleDeleteTitle,
    }
    return (
      <ApiContext.Provider value={value}>
        <div className='App'>
          <nav className='App__nav'>
            {/* {this.renderNavRoutes()} */}
          </nav>
          <header className='App__header'>
            <h1>
              <Link to='/'>ReadNext</Link>
            </h1>
          </header>
          <main className='App__main'>
            {this.renderMainRoutes()}
          </main>
        </div>
      </ApiContext.Provider>
    )
  }
}

export default App

