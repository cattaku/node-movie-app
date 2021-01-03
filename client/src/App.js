import React, { Suspense }from "react";
import { Switch,Route } from "react-router-dom";

import Auth from './hoc/auth';

import MainNav from './components/views/nav/MainNav'
import LandingPage from './components/views/LandingPage/LandingPage';
import Login from './components/views/user/Login';
import Register from './components/views/user/Register';
import MovieDetail from './components/views/MovieDetail/MovieDetail';
import FavoritePage from "./components/views/FavoritePage/FavoritePage";


function App() {

  return (
    <Suspense fallback={(<div>Loding...</div>)}>
      <MainNav />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component = {Auth(LandingPage, null)} />
          <Route exact path="/login" component = {Auth(Login,false)} />
          <Route exact path="/register" component = {Auth(Register, false)} />
          <Route exact path="/movie/:movieId" component = {Auth(MovieDetail, null)} />
          <Route exact path="/favorite" component = {Auth(FavoritePage, true)} />
        </Switch>
      </div>

    </Suspense>
  
  );
}


export default App;
