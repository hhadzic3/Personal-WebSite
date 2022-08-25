import React from "react";
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { AiOutlineMessage } from 'react-icons/ai';
import './Nav.css'
import { Link } from "react-scroll";
import ReactTooltip from "react-tooltip";

const Nav = () => {  
  return (
      <nav>
        <ReactTooltip />
        <Link data-tip="Home" to="home" activeClass="active" id={'a'} spy={true} smooth={true} ><AiOutlineHome/></Link>
        <Link data-tip="About" to="about" id={'a'} spy={true} smooth={true} ><AiOutlineUser/></Link>
        <Link data-tip="Projects" to="portfolio" id={'a'} spy={true} smooth={true} ><AiOutlineFundProjectionScreen/></Link>
        <Link data-tip="Skills" to="services" id={'a'} spy={true} smooth={true}><BiBook/></Link>
        <Link data-tip="Contact" to="contact" id={'a'} spy={true} smooth={true} ><AiOutlineMessage/></Link>
      </nav>
  )
}

export default Nav;
