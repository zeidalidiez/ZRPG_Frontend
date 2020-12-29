import React from 'react'
import ReactDOM from 'react-dom'
import BookListMain from './BookListMain'
import { BrowserRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
  <BrowserRouter>
  <BookListMain />
  </BrowserRouter>
  ,div)
  ReactDOM.unmountComponentAtNode(div)
})