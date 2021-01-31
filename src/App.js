import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route} 
from "react-router-dom";
import Login from "./Login";

function App() {
  return (
    //BEM
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Checkout/>
          </Route>

          <Route path="/">
            <Home/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
