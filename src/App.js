import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx'
import Nav from './components/Nav/Nav.jsx'
import Profile from './components/Profile/Profile.jsx'
import Footer from './components/Footer/Footer.jsx'
import Dialogs from './components/Dialogs/Dialogs.jsx'
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Switch>
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/dialogs' component={Dialogs} />
            <Route exact path='/news' component={News} />
            <Route exact path='/music' component={Music} />
            <Route exact path='/settings' component={Settings} />
          </Switch>
        </div>
        {/* <Profile/> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
