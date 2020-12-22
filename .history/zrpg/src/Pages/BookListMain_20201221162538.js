import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Book from '../Pages/Book'
import CircleButton from './CircleButton'
import ApiContext from '../ApiContext'
// import { getNotesForFolder } from '../notes-helpers'

export default class BookListMain extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = ApiContext

  render() {
    const { titles = [] } = this.context
    
    return (
      <section className='BookListMain'>
        <ul>
            {<li key={title.id}>
              <Book
                id={title.id}
                titlename={title.titlename}
                linksource={title.linksource}
              />
            </li>}
        </ul>
        <div className='BookListMain__button-container'>
          <CircleButton
            tag={Link}
            to='/addtitle'
            type='button'
            className='BookListMain__add-book-button'
          >
            <FontAwesomeIcon icon='plus' />
            <br />
            Note
          </CircleButton>
        </div>
      </section>
    )
  }
}