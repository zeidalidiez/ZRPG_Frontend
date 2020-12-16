import logo from './logo.svg';
import './css/main.css';
import {Route, BrowserRouter as Router, Link} from "react-router-dom";
import React, { Component } from 'react';
import Main from "./Pages/Main";
import EditItem from "./Pages/EditItem";
import AddItem from './Pages/AddItem';

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      bookmarks: [],
      showAddForm: false
    };
  }

  render() {

  return (
    <Router>
    <div id='app-id' className='app-class'>
    <h1> ReadNext </h1>
  <p> A list to track what you want to read. </p>
  <h2> Please add a title to begin </h2>
    </div>

    <button> <Link to='/AddItem'> Add Item </Link> </button>
<Route path="/" exact component={Main} />
<Route path="/edititem" component={EditItem} />
<Route path="/additem" component={AddItem} />
    </Router>
  );
}
}

export default App;
