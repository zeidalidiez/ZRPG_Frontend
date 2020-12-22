import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ApiContext from '../ApiContext'
import config from '../config'

export default class Book extends React.Component {
  static defaultProps = {
    onDeleteBook: () => { },
  }
  static contextType = ApiContext;

  handleClickDelete = e => {
    e.preventDefault()
    const titleid = this.props.id

    fetch(`${config.API_ENDPOINT}/notes/${noteid}`, {
      method: 'DELETE',
    })
      .then(() => {
        this.context.deleteNote(titleid)
        // allow parent to perform extra behaviour
        this.props.onDeleteNote(titleid)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    const { titlename, id, notes } = this.props
    return (
      <div className='Book'>
        <h2 className='Book__title'>
          <Link to={`/book/${id}`}>
            {titlename}
          </Link>
        </h2>
        <button
          className='title__delete'
          type='button'
          onClick={this.handleClickDelete}
        >
          <FontAwesomeIcon icon='trash-alt' />
          {' '}
          remove
        </button>
      </div>
    )
  }
}