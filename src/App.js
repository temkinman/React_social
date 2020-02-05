import React from 'react';
import './App.css';
import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import Profile from './components/Profile.jsx'
import Footer from './components/Footer.jsx'

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
