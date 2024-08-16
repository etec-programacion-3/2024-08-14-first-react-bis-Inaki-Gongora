import React from 'react';
import Header from './components/Header';
import LandingMain from './components/LandingMain';
import Footer from './components/Footer';
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <LandingMain></LandingMain>
      <Footer></Footer>
    </div>
  );
}

export default App;