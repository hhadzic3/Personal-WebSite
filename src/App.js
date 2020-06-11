import React from 'react';
import './App.css';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Services from './components/Services';
import Header from './components/Header';
import Tech from './components/Tech';
import PortfolioInfo from './components/PortfolioInfo';


function App() {
  return (
    <div className="App">
        <Header></Header>
        <Services></Services>
        <Portfolio></Portfolio>
        <About></About>
        <Tech></Tech>
        <Contact></Contact>
        <Footer></Footer>
        
        <PortfolioInfo></PortfolioInfo>
    </div>
  );
}

export default App;
