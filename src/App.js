import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext';
import Header from './Components/widgets/header';
import Feed from './Components/feed';
import DetailView from './Components/detailView';
import Search from './Components/searchView';
import { Signup, Login } from './Components/auth';
// import Footer from './Components/widgets/footer';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className='App'>
          <Header />
          <Switch>
            <Route exact path='/' component={Feed} />
            <Route exact path='/detail/:id' component={DetailView} />
            <Route exact path='/search/:id' component={Search} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
