import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export default function Portfolio({ portfolioLinks }) {

    return(
      <section className="page-section bg-light" id="portfolio">
          <div className="container">
              <div className="text-center">
                  <h2 className="section-heading text-uppercase">MY PROJECTS</h2>
                  <h3 className="section-subheading text-muted">I've been doing development for just about 4 years now, and I'm always eager to learn more in this fast paced industry.</h3>
              </div>
              <div className="row">
                  {portfolioLinks && portfolioLinks.map(( {title , caption , img, github, demo} , i) => 
                      <div data-aos="zoom-in" className="col-lg-4 col-sm-6 mb-4" key={title}>
                          <div className="portfolio-item">
                              <a className="portfolio-link" rel="noopener noreferrer" target = "_blank"  href={github} >
                                  <div className="portfolio-hover">
                                      <div className="portfolio-hover-content">
                                          <i className="fas fa-code fa-3x"></i>
                                      </div>
                                  </div>
                                  <img className="img-fluid" src={img} alt=""/>
                              </a>
                              <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">{ title } </div>
                                    <div className="portfolio-caption-subheading text-muted"> {caption} </div>
                                   
                                    {
                                        github !== '' ? (
                                        <a href={github} rel="noopener noreferrer" target = "_blank">
                                            <button className="btn btn-secondary" data-dismiss="modal" type="button">  <i className="fab fa-github"></i> View Code</button>
                                        </a>
                                        ) : null
                                    }
                                    
                                    { demo !== '' ? (
                                        <a href={demo} rel="noopener noreferrer" target = "_blank">
                                            <button className="btn btn-primary" data-dismiss="modal" type="button">  <i className="fas fa-external-link-alt"></i> View Demo</button>
                                        </a>
                                    ) : null
                                    }
                              </div>
                          </div>
                      </div>
                      )
                  }
              </div>
          </div>
      </section>
  )
  }

