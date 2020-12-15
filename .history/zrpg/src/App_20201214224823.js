import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router, Link} from "react-router-dom";
import Main from "./Pages/Main";
import EditItem from "./Pages/EditItem";
import AddItem from './Pages/AddItem';

function App() {
  return (
    <Router>
    <div id='app-id' className='app-class'>
    <h1> ReadNext </h1>
  <p> A list to track what you want to read. </p>
  <h2> Please add a title to begin </h2>
    </div>

    <Link to='/AddItem'> Add Item </Link>
    <Link to='/EditItem'> Edit Item </Link>
    <Link to='/Main'> Main </Link>
{/* <Route path="/" component={Main} />
<Route path="/edititem" component={EditItem} />
<Route path="/additem" component={AddItem} /> */}
    </Router>
  );
}

export default App;
