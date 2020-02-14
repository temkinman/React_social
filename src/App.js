import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx'
import Nav from './components/Nav/Nav.jsx'
import Profile from './components/Profile/Profile.jsx'
import Footer from './components/Footer/Footer.jsx'

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Nav/>
      <Profile/>
      <Footer/>
    </div>

  );
}

export default App;
