import React from 'react'

export default () => {
    return(
        <section class="page-section" id="about">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">About</h2>
                <h3 class="section-subheading text-muted">I'm a software engineer based in Sarajevo, BiH specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.</h3>
            </div>
            <ul class="timeline">
                <li>
                    <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="" /></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4>2014-2018</h4>
                            <h4 class="subheading">My Beginnings</h4>
                        </div>
                        <div class="timeline-body"><p class="text-muted">In First Gymnasium in Sarajevo I made my first moves in programming.I learned basics of C, C++ and also HTML, CSS and JavaScript what makes me able to build my first website.</p></div>
                    </div>
                </li>
                <li class="timeline-inverted">
                    <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt="" /></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4>2018-2019</h4>
                            <h4 class="subheading">Bigger steps in development</h4>
                        </div>
                        <div class="timeline-body"><p class="text-muted">I started my stydes on Faculsy of Electrical Engeniring in Sarajevo.I learned samoe backend useed laguages like Java and NodeJs.Also I learned vary important tools like git + github, linux commands, Command Line , Chrome DevTools and Postman. </p></div>
                    </div>
                </li>
                <li>
                    <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/3.jpg" alt="" /></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4>2019-2020</h4>
                            <h4 class="subheading">Onderstunding Real World of Apps</h4>
                        </div>
                        <div class="timeline-body"><p class="text-muted">I learned Angular, React, Deployment apps, connecting Frontend and Backend.</p></div>
                    </div>
                </li>
                <li class="timeline-inverted">
                    <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/4.jpg" alt="" /></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4>Second half of 2020</h4>
                            <h4 class="subheading">First Job</h4>
                        </div>
                        <div class="timeline-body"><p class="text-muted">AtlantBH</p></div>
                    </div>
                </li>
                <li class="timeline-inverted">
                    <div class="timeline-image">
                        <h4>Be Part<br />Of My/Our<br />Story!</h4>
                    </div>
                </li>
            </ul>
        </div>
    </section>

    )
}