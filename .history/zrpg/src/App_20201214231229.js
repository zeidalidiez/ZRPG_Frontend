import logo from './logo.svg';
import './css/main.css';
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

    <button> <Link to='/AddItem'> Add Item </Link> </button>
    <Link to='/EditItem'> Edit Item </Link>
<Route path="/" exact component={Main} />
<Route path="/edititem" component={EditItem} />
<Route path="/additem" component={AddItem} />
    </Router>
  );
}

export default App;
