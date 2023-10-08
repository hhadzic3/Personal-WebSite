import React from 'react'
import AOS from 'aos';
import { Element } from "react-scroll";
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Services = () => {
    return(
        <Element name='services'>
        <section className="page-section">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Skills</h2>
                    <h3 className="section-subheading text-muted">I aspire toward a career that will allow me to pursue
my creativity through crafting nice software with best frontend and backend as possible.</h3>
                </div>
                <div className="row text-center">
                    <div data-aos="fade-right" className="col-md-4">
                        <span className="fa-stack fa-4x"><i className="fas fa-circle fa-stack-2x text-primary"></i><i className="fas fa-code fa-stack-1x fa-inverse"></i></span>
                        <h4 className="my-3">Technical skills</h4>
                        <p className="text-muted"> <b>Programming Languages:</b> JavaScript (ES6), TypeScript, HTML, CSS, C, C++, C#, Java, SQL, Python. <br></br>
                        <b>Libraries & Frameworks: </b>jQuery, React, Angular, Node.js, Express, Bootstrap, MongoDB, MySQL, JavaFX , ASP.Net, Keras. <br></br>
                        <b>Tools & Platforms: </b>Git, Netlify, Heroku, Docker, Command Line.</p>
                    </div>
                    <div data-aos="fade-in" className="col-md-4">
                        <span className="fa-stack fa-4x"><i className="fas fa-circle fa-stack-2x text-primary"></i><i className="fas fa-laptop fa-stack-1x fa-inverse"></i></span>
                        <h4 className="my-3">Courses through the faculty</h4>
                        <p className="text-muted"> Databases, Techniques of programming, Software development, Algorithms and data structures, Web technologies, Programming mobile applications 
for Android, Verification and validation of software, Data warehouse, OOP (analysis and design)
, Discrete and Engineering Mathematics, Physics, Automata Theory , Computer Architectures, Artificial Intelligence.</p>
                    </div>
                    <div data-aos="fade-left" className="col-md-4">
                        <span className="fa-stack fa-4x"><i className="fas fa-circle fa-stack-2x text-primary"></i><i className="fas fa-lightbulb fa-stack-1x fa-inverse"></i></span>
                        <h4 className="my-3">Personal skills</h4>
                        <p className="text-muted">
                            <b>Languages: </b> Bosnian/Croatian/Serbian (native), English: (C1), German: (B1)
                            <br />
                            <b>Interests: </b> Basketball, Traveling, Skiing
                            <br />
                            <b>Technical:</b> Web Programming Skills, E-Commerce, Teamwork, Verbal 
    Communication, Web User Interface Design (UI), Security Principles, Object-Oriented Design, Web Services 
    (REST), Multimedia Content Development, API's </p>
                    </div>
                </div>
            </div>
        </section>
        </Element>

    )
}

export default Services;