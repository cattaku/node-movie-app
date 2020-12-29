import React from "react";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage';
import Login from './components/views/user/Login';
import Register from './components/views/user/Register';
import MovieDetail from './components/views/MovieDetail/MovieDetail';
import Auth from './hoc/auth';



function App() {

  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component = {Auth(LandingPage, null)} />
          <Route exact path="/login" component = {Auth(Login,false)} />
          <Route exact path="/register" component = {Auth(Register, false)} />
          <Route exact path="/movie/:movieId" component = {Auth(MovieDetail, null)} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
