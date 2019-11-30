import React from 'react';
// import logo from './logo.svg';
import './App.css';
import HOME  from "./pages/HOME";
import BOOKS from "./pages/BOOKS";
import BOOKDETAILS from "./pages/BOOKDETAILS";
// import ERROR from './pages/ERROR';
import { Route, Switch} from 'react-router-dom';
 import Navbar from './components/Navbar'

 
function App() {
  return (
<>
<Navbar />
<Switch>
<Route exact path="/" component={HOME} />
{/* <Route exact path="/books/" component={BOOKS} /> */}
<Route exact path="/books/:slug" component={BOOKDETAILS} />

</Switch>



</>
  
  );
}

export default App;
