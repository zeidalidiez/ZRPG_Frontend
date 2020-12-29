import React from 'react'
import ReactDOM from 'react-dom'
import BookDetails from './BookDetail'
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
  <BrowserRouter>
  <BookDetails />
  </BrowserRouter>
  ,div)
  ReactDOM.unmountComponentAtNode(div)
})