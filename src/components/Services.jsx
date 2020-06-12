import React from 'react'

export default () => {
    return(
        <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Services</h2>
                    <h3 className="section-subheading text-muted">Hey! My name is Harun and I'm a web developer with a passion for front end development and design. I'm currently a third year student at Faculty of Electrical Engeniring pursuing a degree in information science with a minor in interaction design. I aspire toward a career that will allow me to channel my creativity through crafting beautiful software and engaging experiences.</h3>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x"><i className="fas fa-circle fa-stack-2x text-primary"></i><i className="fas fa-code fa-stack-1x fa-inverse"></i></span>
                        <h4 className="my-3">Development</h4>
                        <p className="text-muted">With a strong foundation in computer science, I'm passionate about web design and development, and interested in mobile app development. As I grow as a developer, I hope to write clean, readable code that can be used by others and leveraged to create beautiful software.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x"><i className="fas fa-circle fa-stack-2x text-primary"></i><i className="fas fa-laptop fa-stack-1x fa-inverse"></i></span>
                        <h4 className="my-3">Responsive Design</h4>
                        <p className="text-muted">Design isn't just what a product looks like and feels like on the outside. Design encompasses the internal functionality of a product as well as the overall user experience. I strive to design interfaces and experiences that people can enjoy on all digital mediums.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x"><i className="fas fa-circle fa-stack-2x text-primary"></i><i className="fas fa-lightbulb fa-stack-1x fa-inverse"></i></span>
                        <h4 className="my-3">Involvment</h4>
                        <p className="text-muted">I've been involved with basketball and I also like ski, footbal and movies in free time.</p>
                    </div>
                </div>
            </div>
        </section>

    )
}