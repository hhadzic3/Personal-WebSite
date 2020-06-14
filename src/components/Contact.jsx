import React from 'react'

export default () => {
    return(
        <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">GET IN TOUCH!</h2>
                    <h3 className="section-subheading text-muted"></h3>
                </div>
                <form name="contact" method="post" id="contactForm">

                <input type="hidden" name="form-name" value="contact" />
                    
                    <div className="row align-items-stretch mb-5">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input className="form-control" name="name" type="text" placeholder="Your Name *"  />
                            </div>
                            <div className="form-group">
                                <input className="form-control" name="email" type="email" placeholder="Your Email *"  />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-group-textarea mb-md-0">
                                <textarea className="form-control" name="message" placeholder="Your Message *" ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
                    </div>
                    
                </form>
            </div>
    </section>

    )
}