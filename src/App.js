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
import img1 from './images/app1.PNG'
import img2 from './images/app2.PNG'
import img3 from './images/app3.PNG'
import img4 from './images/app4.png'

function App() {

  const portfolioLinks = [
    {
      title: 'Tehnical inspection of vehicle - Web app',
      caption: 'NodeJS, MySQL and Angular',
      img: img1
    },
    {
      title: 'E-commerce website',
      caption: 'HTML, CSS and Vanilla JS',
      img: img2
    },
    {
      title: 'Portfolio website',
      caption: 'HTML, CSS and React.js',
      img: img3
    },
    {
      title: 'Desktop app-Movie library',
      caption: 'JavaFX',
      img: img4
    }
  ]


  return (
    <div className="App">
        <Header></Header>
        <Services></Services>
        <Portfolio portfolioLinks={portfolioLinks} ></Portfolio>
        <About></About>
        <Tech></Tech>
        <Contact></Contact>
        <Footer></Footer>
        
        <PortfolioInfo></PortfolioInfo>
    </div>
  );
}

export default App;
