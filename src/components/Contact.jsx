import React from 'react'

export default () => {
    return(
        <section className="page-section" id="contact">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">GET IN TOUCH!</h2>
                <h3 className="section-subheading text-muted"></h3>
            </div>
            <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" id="contactForm" name="sentMessage">
                <div className="row align-items-stretch mb-5">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="hidden" className="form-control" id="name" name="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="form-group">
                            <input type="hidden" className="form-control" id="email" name="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." />
                            <p className="help-block text-danger"></p>
                        </div>
                      
                    </div>
                    <div className="col-md-6">
                        <div className="form-group form-group-textarea mb-md-0">
                            <textarea type="hidden" className="form-control" id="message" name="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                            <p className="help-block text-danger"></p>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <div id="success"></div>
                    <button className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
                </div>
            </form>
        </div>
    </section>

    )
}