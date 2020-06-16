import React from 'react'

export default function Portfolio({ portfolioLinks }) {

    return(
      <section className="page-section bg-light" id="portfolio">
          <div className="container">
              <div className="text-center">
                  <h2 className="section-heading text-uppercase">WHAT I'VE DONE</h2>
                  <h3 className="section-subheading text-muted">I've been doing development for just about 3 years now, and I'm always eager to learn more in this fast paced industry.</h3>
              </div>
              <div className="row">
                  {portfolioLinks && portfolioLinks.map(( {title , caption , img, github, demo} , i) => 
                      <div className="col-lg-4 col-sm-6 mb-4" key={title}>
                          <div className="portfolio-item">
                              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1" >
                                  <div className="portfolio-hover">
                                      <div className="portfolio-hover-content">
                                          <i className="fas fa-plus fa-3x"></i>
                                      </div>
                                  </div>
                                  <img className="img-fluid" src={img} alt=""/>
                              </a>
                              <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">{ title } </div>
                                    <div className="portfolio-caption-subheading text-muted"> {caption} </div>
                                    <a href={github} rel="noopener noreferrer" target = "_blank">
                                        <button className="btn btn-secondary" data-dismiss="modal" type="button">  <i className="fab fa-github"></i> View Code</button>
                                    </a>
                                    <a href={demo} rel="noopener noreferrer" target = "_blank">
                                        <button className="btn btn-primary" data-dismiss="modal" type="button">  <i className="fas fa-external-link-alt"></i> View Demo</button>
                                    </a>
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
