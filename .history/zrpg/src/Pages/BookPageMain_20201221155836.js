import React from 'react'
import Book from '../Pages/Book'
import ApiContext from '../ApiContext'
import { findBook } from '../books-helpers'
import './NotePageMain.css'

export default class BookPageMain extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = ApiContext

  handleDeleteTitle = titleid => {
    this.props.history.push(`/`)
  }

  render() {
    const { titles = [] } = this.context
    const { titleid } = this.props.match.params
    const title = findBook(titles, parseInt(titleid)) || { content: '' }
    return (
      <section className='BookPageMain'>
        <Book
          id={Book.id}
          notename={Book.notename}
          modified={note.modified}
          onDeleteNote={this.handleDeleteTitle}
        />
        <div className='NotePageMain__content'>
          {note.content.split(/\n \r|\n/).map((para, i) =>
            <p key={i}>{para}</p>
          )}
        </div>
      </section>
    )
  }
}