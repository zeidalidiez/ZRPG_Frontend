import React from 'react'
import ReactDOM from 'react-dom'
import BookDetail from './BookDetail'
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
  <BrowserRouter>
  <BookDetail />
  </BrowserRouter>
  ,div)
  ReactDOM.unmountComponentAtNode(div)
})