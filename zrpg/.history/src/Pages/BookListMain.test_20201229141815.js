import React from 'react'
import ReactDOM from 'react-dom'
import BookListMain from './BookListMain'
import { BrowserRouter } from 'react-router-dom'
it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
  <BrowserRouter>
  <BookListMain />
  </BrowserRouter>
  ,div)
  ReactDOM.unmountComponentAtNode(div)
})