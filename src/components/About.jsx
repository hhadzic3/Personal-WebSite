import React from 'react'
import atlant from '../images/atlant.png'
import first from '../images/first.png'
import sa from '../images/sa.png'
import uni from '../images/uni.jpg'

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
                    <div className="timeline-image"><img className="rounded-circle img-fluid" src={sa} alt="" /></div>
                    <div className="timeline-panel">
                        <div className="timeline-heading">
                            <h4>2014-2018</h4>
                            <h4 className="subheading">My Beginnings</h4>
                        </div>
                        <div className="timeline-body"><p className="text-muted">I started my first programming steps at the First Gymnasium in Sarajevo. In the beginning it was C and C ++ (which I later studied a lot more in college), after that I started learning HTML, CSS and JavaScript.</p></div>
                    </div>
                </li>
                <li className="timeline-inverted"> 
                    <div className="timeline-image"><img className="rounded-circle img-fluid" src={uni} alt="" /></div>

                    <div className="timeline-panel">
                        <div className="timeline-heading">
                            <h4>2018-2019</h4>
                            <h4 className="subheading">Bigger steps in development</h4>
                        </div>
                        <div className="timeline-body"><p className="text-muted">I started my stydes on Faculty of Electrical Engineering.I learned some backend-used technologies like Java and NodeJs.Also I learned vary important tools like git + github, linux commands, Command Line , Chrome DevTools and Postman. </p></div>
                    </div>
                </li>
                <li>
                    <div className="timeline-image"><img className="rounded-circle img-fluid" src={first} alt="" /></div>
                    <div className="timeline-panel">
                        <div className="timeline-heading">
                            <h4>2019-2020</h4>
                            <h4 className="subheading">Understanding Real World of Apps</h4>
                        </div>
                        <div className="timeline-body"><p className="text-muted">I learned Angular and React, what makes my better in building Frontend. Also I learned Deployment of apps, connecting Frontend and Backend, git(github) and basics of linux terminal commands.</p></div>
                    </div>
                </li>
                <li className="timeline-inverted">
                    <div className="timeline-image"><img className="rounded-circle img-fluid" src={atlant} alt="" /></div>
                    <div className="timeline-panel">
                        <div className="timeline-heading">
                            <h4>Second half of 2020</h4>
                            <h4 className="subheading">First Job</h4>
                        </div>
                        <div className="timeline-body"><p className="text-muted">I had exelent oppertunity to work in one of the best software companies in Sarajevo <a href="https://www.atlantbh.com/">Atlantbh</a>.</p></div>
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