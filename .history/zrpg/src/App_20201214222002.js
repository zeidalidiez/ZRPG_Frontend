import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router} from "react-router-dom";
import Main from "./Pages/Main";
import EditItem from "./Pages/EditItem";
import AddItem from './Pages/AddItem';

function App() {
  return (
    <Router>
    <div className="App">
    <h1> ReadNext </h1>
  <p> A list to track what you want to read. </p>
  <h2> Please add a title to begin </h2>
    </div>
<Route path="/" component={Main} />
<Route path="/edititem" component={EditItem} />
<Route path="/additem" component={AddItem} />
    </Router>
  );
}

export default App;
