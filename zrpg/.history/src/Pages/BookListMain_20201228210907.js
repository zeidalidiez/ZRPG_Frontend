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

  state = { isExpanded: false }
  static contextType = ApiContext

  render() {
    const { titles = [] } = this.context
    function setExpanded() {
      this.setState({isExpanded: true})
    }
      
    return (
      <section className='BookListMain'>
        <ul>{titles.map(title => 
            <li key={title.id}>
              <Book
                id={title.id}
                titlename={title.title}
                linksource={title.linksource}
                isExpanded={this.state.isExpanded}
                setExpanded={setExpanded}
              />
            </li>
        )}
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
            Add Title
          </CircleButton>
        </div>
      </section>
    )
  }
}