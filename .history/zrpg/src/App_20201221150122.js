import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NoteListNav from '../NoteListNav/NoteListNav'
import NotePageNav from '../NotePageNav/NotePageNav'
import NoteListMain from '../NoteListMain/NoteListMain'
import NotePageMain from '../NotePageMain/NotePageMain'
import AddNote from '../AddNote/AddNote'
import ApiContext from './ApiContext'
import config from '../config'

class App extends Component {
  state = {
    titles: []
  };

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/books`)
    ])
      .then(([notesRes, foldersRes]) => {
        if (!notesRes.ok)
          return notesRes.json().then(e => Promise.reject(e))
        if (!foldersRes.ok)
          return foldersRes.json().then(e => Promise.reject(e))

        return Promise.all([
          notesRes.json(),
          foldersRes.json(),
        ])
      })
      .then(([notes, folders]) => {
        this.setState({ notes, folders })
      })
      .catch(error => {
        console.error({ error })
      })
  }

  handleAddFolder = folder => {
    this.setState({
      folders: [
        ...this.state.folders,
        folder
      ]
    })
  }

  handleAddNote = note => {
    this.setState({
      notes: [
        ...this.state.notes,
        note
      ]
    })
  }

  handleDeleteNote = noteid => {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== noteid)
    })
  }

  renderNavRoutes() {
    return (
      <>
        {['/', '/folder/:folderid'].map(path =>
          <Route
            exact
            key={path}
            path={path}
            component={NoteListNav}
          />
        )}
        <Route
          path='/note/:noteid'
          component={NotePageNav}
        />
        <Route
          path='/add-folder'
          component={NotePageNav}
        />
        <Route
          path='/add-note'
          component={NotePageNav}
        />
      </>
    )
  }

  renderMainRoutes() {
    return (
      <>
        {['/', '/folder/:folderid'].map(path =>
          <Route
            exact
            key={path}
            path={path}
            component={NoteListMain}
          />
        )}
        <Route
          path='/note/:noteid'
          component={NotePageMain}
        />
        <Route
          path='/add-folder'
          component={AddFolder}
        />
        <Route
          path='/add-note'
          component={AddNote}
        />
      </>
    )
  }

  render() {
    const value = {
      notes: this.state.notes,
      folders: this.state.folders,
      addFolder: this.handleAddFolder,
      addNote: this.handleAddNote,
      deleteNote: this.handleDeleteNote,
    }
    return (
      <ApiContext.Provider value={value}>
        <div className='App'>
          <nav className='App__nav'>
            {this.renderNavRoutes()}
          </nav>
          <header className='App__header'>
            <h1>
              <Link to='/'>Noteful</Link>
              {' '}
              <FontAwesomeIcon icon='check-double' />
            </h1>
          </header>
          <main className='App__main'>
            {this.renderMainRoutes()}
          </main>
        </div>
      </ApiContext.Provider>
    )
  }
}

export default App
















// import logo from './logo.svg';
// import './css/main.css';
// import {Route, BrowserRouter as Router, Link} from "react-router-dom";
// import React, { Component } from 'react';
// import Main from "./Pages/Main";
// import EditItem from "./Pages/EditItem";
// import AddItem from './Pages/AddItem';

// class App extends Component {


//   constructor(props) {
//     super(props);
//     this.state = {
//       titles: []
//     };
//   }

//   render() {

//   return (
//     <Router>
//     <div id='app-id' className='app-class'>
//     <h1> ReadNext </h1>
//   <p> A list to track what you want to read. </p>
//   <h2> Please add a title to begin </h2>
//     </div>

//     <button> <Link to='/AddItem'> Add Item </Link> </button>
// <Route path="/" exact component={Main} />
// <Route path="/edititem" component={EditItem} />
// <Route path="/additem" component={AddItem} />
//     </Router>
//   );
// }
// }

// export default App;
