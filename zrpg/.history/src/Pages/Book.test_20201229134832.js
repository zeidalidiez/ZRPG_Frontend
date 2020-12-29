import React from 'react'
import ReactDOM from 'react-dom'
import Book from './Book'
import { BrowserRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
  <BrowserRouter>
  <Book />
  </BrowserRouter>
  ,div)
  ReactDOM.unmountComponentAtNode(div)
})