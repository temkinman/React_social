import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx'
import Nav from './components/Nav/Nav.jsx'
import Profile from './components/Profile/Profile.jsx'
import Footer from './components/Footer/Footer.jsx'
import Dialogs from './components/Dialogs/Dialogs.jsx'
import { Route, BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Route path='/profile' component={Profile} />
          <Route path='/dialogs' component={Dialogs} />
          {/* <Route path='/news' component={News} /> */}
          {/* <Route path='/music' component={Music} /> */}
          {/* <Route path='/settings' component={Settings} /> */}
        </div>

        {/* <Profile/> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
