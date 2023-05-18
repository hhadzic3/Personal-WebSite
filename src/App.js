import React from 'react';
import './App.css';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Services from './components/Services';
import Header from './components/Header.js';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { portfolioLinks, history } from './data/data';

function App() {

  const injectGA = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-0WFFHPB4N8');
  };
 
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
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-0WFFHPB4N8"></script>
            <script>
                {injectGA()}
            </script>
          </Helmet>
        <div className="App">
            <Header ></Header>
            <About history={history}></About>
            <Portfolio portfolioLinks={portfolioLinks} ></Portfolio>
            <Services></Services>
            <Contact></Contact>
            <Footer></Footer>
            
        </div>
      </HelmetProvider>
    </>
  );
}

export default App;
