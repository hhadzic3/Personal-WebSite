import React from 'react';
import Nav from './Nav';
import pdf from '../pdf/Harun Hadzic CV.pdf';
import { Link } from "react-scroll";

export default function Header() {
    return(
    <div>
        <Nav></Nav>
        <header className="masthead" id='home'>
            <div className="container">
                <div className="masthead-subheading">Hi, my name is Harun Hadžić</div>
                <div className="masthead-heading ">Software engineer</div>
                <a className="btn btn-secondary btn-xl text-uppercase js-scroll-trigger" rel="noopener noreferrer" href={pdf} target = "_blank">Resume</a>
                <Link to='about' spy={true} smooth={true} className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" >Tell Me More</Link>
            </div>
        </header>
    </div>
    )
}