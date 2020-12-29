import React from 'react'
import Book from '../Pages/Book'
import ApiContext from '../ApiContext'
import { findBook } from '../books-helpers'

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
    console.log(titles)
    const { titleid } = this.props.match.params
    const thetitle = findBook(titles, parseInt(titleid))
    return (
      <section className='BookPageMain'>
        <Book
          id={thetitle.id}
          titlename={thetitle.titlename}
          onDeleteNote={this.handleDeleteTitle}
        />
        <div className='BookPageMain__content'>
          {titles.content.split(/\n \r|\n/).map((para, i) =>
            <p key={i}>{para}</p>
          )}
        </div>
      </section>
    )
  }
}