import React, { Component } from 'react';
import Header from './Components/header/index'
import MainContent from './Components/MainContent/index'
import Footer from './Components/Footer'
import './MainCss.css'

class App extends Component {

  render() {
    return (
      <div className='App'>
        <Header />
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default App;
