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
import img5 from './images/app5.PNG'

function App() {

  const portfolioLinks = [
    {
      title: 'Tehnical inspection of vehicle - Web app',
      caption: 'NodeJS, MySQL and Angular',
      img: img1,
      description: 'This app provides opportunity for managers and mechanic of vehicle inspection company Ada to make their bussines easier. Also customers can see basic info about Ada and make reservation of technical review by calling or sending email.'
    },
    {
      title: 'E-commerce website',
      caption: 'HTML, CSS and Vanilla JS',
      img: img2,
      description: 'Website that makes order office materials easier.'
    },
    {
      title: 'Portfolio website',
      caption: 'HTML, CSS and React.js',
      img: img3,
      description: 'Portfolio website for psyhologist.'
    },
    {
      title: 'Desktop app-Movie library',
      caption: 'JavaFX with Sqlite database',
      img: img4,
      description: 'Desktop app that can be used in traditional video library.'
    },
    {
      title: 'Classroom reservation by faculty staff',
      caption: 'NodeJS (sequelize) with MySQL',
      img: img5,
      description: 'Web app that provides easy reservation of classrooms on Faculty.'
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
