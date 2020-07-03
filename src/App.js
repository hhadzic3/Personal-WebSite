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


import atlant from './images/atlant.png'
import first from './images/first.png'
import sa from './images/sa.png'
import uni from './images/uni.jpg'

import { Helmet } from "react-helmet";
function App() {

  const portfolioLinks = [
    {
      title: 'Tehnical inspection of vehicle - Web app',
      caption: 'NodeJS, MySQL and Angular',
      img: img1,
      github: 'https://github.com/hhadzic3/WebFrontend',
      demo: 'https://vehicle-inspection-center-ada.herokuapp.com/home',
      description: 'This app provides opportunity for managers and mechanic of vehicle inspection company Ada to make their bussines easier. Also customers can see basic info about Ada and make reservation of technical review by calling or sending email.'
    },
    {
      title: 'Classroom reservation by faculty staff',
      caption: 'NodeJS (sequelize) with MySQL',
      img: img5,
      github: 'https://bitbucket.org/hhadzic3/wt1920st/src/master/',
      demo: 'https://bitbucket.org/hhadzic3/wt1920st/src/master/',
      description: 'Web app that provides easy reservation of classrooms on Faculty.'
    },
    {
      title: 'Desktop app-Movie library',
      caption: 'JavaFX with Sqlite database',
      img: img4,
      github: 'https://github.com/hhadzic3/rs-projekat',
      demo: 'https://github.com/hhadzic3/rs-projekat',
      description: 'Desktop app that can be used in traditional video library.'
    },
    {
      title: 'E-commerce website',
      caption: 'HTML, CSS and Vanilla JS',
      img: img2,
      github: 'https://bitbucket.org/hhadzic3/interakcija-projekat/src/master/',
      demo: 'https://vedadbukva.github.io/',
      description: 'Website that makes order office materials easier.'
    },
    {
      title: 'Portfolio website',
      caption: 'HTML, CSS and React.js',
      img: img3,
      github: 'https://github.com/hhadzic3/portfolio-website',
      demo: 'https://amina-karup.netlify.app/',
      description: 'Portfolio website for psyhologist.'
    }
  ]

  const history = [
    {
      title: '2014-2018',
      subtitle: 'My Beginnings',
      img: sa,
      description: 'I started my first programming steps at the First Gymnasium in Sarajevo. In the beginning it was C and C ++ (which I later studied a lot more in college), after that I started learning HTML, CSS and JavaScript.'
    },
    {
      title: '2018-2019',
      subtitle: 'Bigger steps in development',
      img: uni,
      description: 'I started my stydes on Faculty of Electrical Engineering.I learned some backend-used technologies like Java and NodeJs.Also I learned vary important tools like git + github, linux commands, Command Line, Chrome DevTools and Postman.'
    },
    {
      title: '2019-2020',
      subtitle: 'Understanding Real World of Apps',
      img: first,
      description: 'I learned Angular and React, what makes my better in building Frontend. Also I learned Deployment of apps, connecting Frontend and Backend, git(github) and basics of linux terminal commands.'
    },
    {
      title: 'July-October 2020',
      subtitle: 'First Job',
      img: atlant,
      description: 'I had exelent oppertunity to work in one of the best software companies in Sarajevo <a href="https://www.atlantbh.com/">Atlantbh</a>.'
    }
  ]

  return (
    <div className="App">
      <Helmet>
        <title> Harun Hadzic | Software Engineer </title>
        <meta name="description" content="testing react helmet" />
        <meta name="keywords" content="react,seo,helmet" />
        <meta charset="UTF-8" />
        <link rel="icon" href="favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Software engineer Harun Hadzic.|Frontend and Backend (Full stack) developer." />
        <meta name="keywords" content="Harun Hadzic, Software engineer, Developer" />
        <meta name="author" content="Harun Hadzic" />
      </Helmet>
        <Header></Header>
        <Services></Services>
        <Portfolio portfolioLinks={portfolioLinks} ></Portfolio>
        <About history={history}></About>
        <Tech></Tech>
        <Contact></Contact>
        <Footer></Footer>
        <PortfolioInfo></PortfolioInfo>
    </div>
  );
}

export default App;
