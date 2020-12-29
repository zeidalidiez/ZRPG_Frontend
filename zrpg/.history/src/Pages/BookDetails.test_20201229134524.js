import React from 'react'
import ReactDOM from 'react-dom'
import BookDetails from './BookDetails'
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