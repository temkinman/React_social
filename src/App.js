import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx'
import Nav from './components/Nav/Nav.jsx'
import Profile from './components/Profile/Profile.jsx'
import Footer from './components/Footer/Footer.jsx'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

const App = (props) => {
  
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Switch>
            <Route path='/profile'
              render={() => <Profile
                store = {props.store}
              />}
            />
            <Route path='/dialogs'
              render={() => <DialogsContainer
                store = {props.store}
              />} />
            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />
            <Route path='/friends' component={Music} />
            <Route path='/settings' component={Settings} />
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
