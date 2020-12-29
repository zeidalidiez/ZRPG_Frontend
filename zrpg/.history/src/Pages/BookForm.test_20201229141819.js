import React from 'react'
import ReactDOM from 'react-dom'
import BookForm from './BookForm'
import { BrowserRouter } from 'react-router-dom'
it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
  <BrowserRouter>
  <BookForm />
  </BrowserRouter>
  ,div)
  ReactDOM.unmountComponentAtNode(div)
})