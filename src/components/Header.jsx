import React from 'react';
import pdf from '../pdf/Resume - HH.pdf';

export default () => {
    return(
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">Harun Hadžić</a><button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i className="fas fa-bars ml-1"></i></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ml-auto">
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#services">Services</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contact">Contact</a></li>
                        <li className="nav-item"><a className="btn btn-primary nav-link js-scroll-trigger" rel="noopener noreferrer" href={pdf} target = "_blank">Resume</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        
        <header className="masthead">
            <div className="container">
                <div className="masthead-subheading">.</div>
                <div className="masthead-heading ">.</div>
                <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
            </div>
        </header>
    </div>
    )
}