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
                state={props.state.profilePage}
                addPost={props.addPost}
                updateTextPost={props.updateTextPost}
              />}
            />
            <Route path='/dialogs'
              render={() => <Dialogs
                state={props.state.dialogsPage}
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
