import React from 'react'

export default ({ portfolioLinks }) => {
    return(
        <section class="page-section bg-light" id="portfolio">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Portfolio</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div class="row">
                    {portfolioLinks && portfolioLinks.map(( {title , caption} , i) => 
                        <div class="col-lg-4 col-sm-6 mb-4">
                            <div class="portfolio-item">
                                <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                                    <div class="portfolio-hover">
                                        <div class="portfolio-hover-content">
                                            <i class="fas fa-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img class="img-fluid" src="https://source.unsplash.com/random" alt=""/>
                                </a>
                                <div class="portfolio-caption">
                                    <div class="portfolio-caption-heading">{ title } </div>
                                    <div class="portfolio-caption-subheading text-muted"> {caption} </div>
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