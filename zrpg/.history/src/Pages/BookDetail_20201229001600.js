import React, { Component } from 'react'
import config from '../config'

class BookDetail extends Component {
  state = {
    book: {}
  };

//   const urlID =  
  componentDidMount() {
    let urlID = this.props.location.pathname
    Promise.all([
      fetch(`${config.API_ENDPOINT+urlID}`)
    ])
      .then(([titleRes]) => {
        if (!titleRes.ok)
          return titleRes.json().then(e => Promise.reject(e))

        return Promise.all([
          titleRes.json()
        ])
      })
      .then( (data) => this.setState({book:data}))
    //   .catch(error => {
    //     console.error({ error })
    //   })
  }
  

  render() {
      console.log(this.state.book[0])
  return(<div className="BookDetail">
<br />
<div className="field">
            <label htmlFor="title-name">Title/Book</label>
            <input type="text" id="title-nameID" name="title-name" value={this.state.book.title} required/>
          </div>
          <div className="field">
            <label htmlFor="title-notes">Notes</label>
            <textarea id="title-notesID" name="title-notes" value={this.state.book.notes} required/>
          </div>
          <div className="field">
            <label htmlFor="title-goal">Reading Goal</label>
            <textarea id="title-goalID" name="title-goal" value={this.state.book.goal} />
          </div>
          <div className="field">
            <label htmlFor="title-linksource">Link or Source</label>
            <textarea id="title-linksourceID" name="title-linksource" value={this.state.book.linksource} />
          </div>
          <div className="buttons">
            <button type="submit">Edit</button>
          </div>
<br />
  </div>)}
}

export default BookDetail

