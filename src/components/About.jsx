import React from 'react'

export default () => {
    return(
        <section className="page-section" id="about">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">About</h2>
                <h3 className="section-subheading text-muted">I'm a software engineer based in Sarajevo, BiH specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.</h3>
            </div>
            <ul className="timeline">
                <li>
                    <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="" /></div>
                    <div className="timeline-panel">
                        <div className="timeline-heading">
                            <h4>2014-2018</h4>
                            <h4 className="subheading">My Beginnings</h4>
                        </div>
                        <div className="timeline-body"><p className="text-muted">In First Gymnasium in Sarajevo I made my first moves in programming.I learned basics of C, C++ and also HTML, CSS and JavaScript what makes me able to build my first website.</p></div>
                    </div>
                </li>
                <li className="timeline-inverted"> 
                    <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="" /></div>

                    <div className="timeline-panel">
                        <div className="timeline-heading">
                            <h4>2018-2019</h4>
                            <h4 className="subheading">Bigger steps in development</h4>
                        </div>
                        <div className="timeline-body"><p className="text-muted">I started my stydes on Faculsy of Electrical Engeniring in Sarajevo.I learned samoe backend useed laguages like Java and NodeJs.Also I learned vary important tools like git + github, linux commands, Command Line , Chrome DevTools and Postman. </p></div>
                    </div>
                </li>
                <li>
                    <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/3.jpg" alt="" /></div>
                    <div className="timeline-panel">
                        <div className="timeline-heading">
                            <h4>2019-2020</h4>
                            <h4 className="subheading">Onderstunding Real World of Apps</h4>
                        </div>
                        <div className="timeline-body"><p className="text-muted">I learned Angular, React, Deployment apps, connecting Frontend and Backend.</p></div>
                    </div>
                </li>
                <li className="timeline-inverted">
                    <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/4.jpg" alt="" /></div>
                    <div className="timeline-panel">
                        <div className="timeline-heading">
                            <h4>Second half of 2020</h4>
                            <h4 className="subheading">First Job</h4>
                        </div>
                        <div className="timeline-body"><p className="text-muted">AtlantBH</p></div>
                    </div>
                </li>
                <li className="timeline-inverted">
                    <div className="timeline-image">
                        <h4>Be Part<br />Of My/Our<br />Story!</h4>
                    </div>
                </li>
            </ul>
        </div>
    </section>

    )
}