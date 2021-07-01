import React, {useState,useEffect} from 'react';
import './App.css';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Services from './components/Services';
import Header from './components/Header.js';
import Tech from './components/Tech';
import PortfolioInfo from './components/PortfolioInfo';
import img1 from './images/app1.PNG'
import img2 from './images/AI1.jpg'
import img3 from './images/app33.jpg'
import img4 from './images/app4.png'
import img5 from './images/app5.PNG'

import atlant from './images/atlant.png'
import first from './images/first.png'
import sa from './images/sa.png'
import shop from './images/shop.png'
import uni from './images/uni.jpg'

import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BoxLoading } from 'react-loadingg';

function App() {

  const portfolioLinks = [
    {
      title: 'Tehnical inspection of vehicle - Web app',
      caption: 'This app provides an opportunity for easier business of managers and mechanics from vehicle inspection companie. Technologies: NodeJS, MySQL and Angular',
      img: img1,
      github: 'https://github.com/hhadzic3/WebFrontend',
      demo: 'https://vehicle-inspection-center-ada.herokuapp.com/home',
      description: 'This app provides opportunity for managers and mechanic of vehicle inspection company Ada to make their bussines easier. Also customers can see basic info about Ada and make reservation of technical review by calling or sending email.'
    },
    {
      title: 'Online shop - Web app',
      caption: 'React, Sass, Material UI | NodeJS, Express and Sequelize with PostgreSQL',
      img: shop,
      github: 'https://github.com/hhadzic3/online-shop-frontend',
      demo: 'https://www.youtube.com/watch?v=rxPSM95rJ_Q&list=PLGhcOhF_qFzAl5bU-QSWHUmZRnbf1Rw7q',
      description: 'I had exelent oppertunity to work in one of the best software companies in Sarajevo Atlantbh.In Softver engineer Internship I made Online shop app using technologies like React, Sass, Material UI, on frontend and NodeJS, Express and Sequelize on backend. As DB I use PostgreSQL. Also, I participated in “Dew day” workshop whith Scrum Master position within the team.'
    },
    {
      title: 'Best Health Strategies',
      caption: 'Web app that allows you to easily and intuitively create plans and adapt your diet to the needs of each individual. Technologies: ASP.NET (C#), MySQL | HTML, CSS (Bootstrap)',
      img: img3,
      github: 'https://github.com/ooad-2020-2021/Grupa3-BestHealthStrategies',
      demo: 'https://www.youtube.com/watch?v=9zF-25usazY',
      description: 'Whether you want to lose weight, have a daily diet plan tailored to your medical condition or create a diet tailored to your training - BHS offers a solution for all of you. BestHealthStrategies is a software or web application that allows you to easily and intuitively plan and adapt your diet to the needs of each individual.'
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
      title: 'Artificial Intelligence',
      caption: 'Introduction projects of Artificial intelligence (Neural networks and Expert systems)',
      img: img2,
      github: 'https://drive.google.com/drive/folders/19ryhXAEWtJAgKcjbVACeluD2HyGNDhB6?usp=sharing',
      demo: 'https://drive.google.com/drive/folders/19ryhXAEWtJAgKcjbVACeluD2HyGNDhB6?usp=sharing',
      description: 'Artificial Intelligence.'
    }
  ]

  const history = [
    {
      title: '2014-2018',
      subtitle: 'First Gymnasium in Sarajevo',
      img: sa,
      description: 'I started my first programming steps at the First Gymnasium in Sarajevo. In the beginning it was C and C ++ (which I later studied a lot more in college), after that I started learning HTML, CSS and JavaScript.'
    },
    {
      title: '2018-2022',
      subtitle: 'University Sarajevo',
      img: uni,
      description: 'I started my stydes on Faculty of Electrical Engineering.I learned some backend-used technologies like Java and NodeJs.Also I learned vary important tools like git + github, linux commands, Command Line, Chrome DevTools and Postman.'
    },
    {
      title: '2019',
      subtitle: 'Understanding Real World of Apps',
      img: first,
      description: 'I learned Angular and React, what makes my better in building Frontend. Also I learned Deployment of apps, connecting Frontend and Backend, git(github) and basics of linux terminal commands.'
    },
    {
      title: 'July-October 2020',
      subtitle: 'First Internship',
      img: atlant,
      description: 'I had exelent oppertunity to work in one of the best software companies in Sarajevo Atlantbh.In Softver engineer Internship I made Online shop app using technologies like React, Sass, Material UI, on frontend and NodeJS, Express and Sequelize on backend. As DB I use PostgreSQL. Also, I participated in “Dew day” workshop whith Scrum Master position within the team.'
    }
  ]

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(() => {
          setLoading(false);
        });
    }, 2500);
  },[]);

  return (
    <>
    <HelmetProvider>
          <Helmet>
            <title>Harun Hadzic | Software Engineer</title>
            <meta name="description" content="testing react helmet" />
            <meta name="keywords" content="react,seo,helmet" />
            <meta charset="UTF-8" />
            <link rel="icon" href="favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Software engineer Harun Hadzic.|Frontend and Backend (Full stack) developer." />
            <meta name="keywords" content="Harun Hadzic, Software engineer, Developer" />
            <meta name="author" content="Harun Hadzic" />
          </Helmet>
    {
      isLoading ? (
        <BoxLoading size='large' color='#6f42c1' />
      ) :
      (    
        <div className="App">
            <Header ></Header>
            <About history={history}></About>
            <Portfolio portfolioLinks={portfolioLinks} ></Portfolio>
            <Services></Services>
            <Tech></Tech>
            <Contact></Contact>
            <Footer></Footer>
            <PortfolioInfo></PortfolioInfo>
          </div>
        )
      }
      </HelmetProvider>
    </>
  );
}

export default App;
