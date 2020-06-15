import React from 'react'

export default () => {
    return(
        <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Services</h2>
                    <h3 className="section-subheading text-muted">Hey! My name is Harun and I&#39;m a web developer with a passion for front
end development and design. I am currently a third year student at Faculty of
Electrical Engeniring pursuing a degree in information science with a minor
in interaction design. I aspire toward a career that will allow me to pursue
my creativity through crafting nice software and engaging experiences.</h3>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x"><i className="fas fa-circle fa-stack-2x text-primary"></i><i className="fas fa-code fa-stack-1x fa-inverse"></i></span>
                        <h4 className="my-3">Development</h4>
                        <p className="text-muted">With a strong foundation in computer science, I find myself passionate about web
design and development, and interested in mobile app development. As I grasp the
concept of growth as a developer, I hope to write clean, readable code that can
be useful to others and leveraged to create a nice software.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x"><i className="fas fa-circle fa-stack-2x text-primary"></i><i className="fas fa-laptop fa-stack-1x fa-inverse"></i></span>
                        <h4 className="my-3">Responsive Design</h4>
                        <p className="text-muted">Design doesn&#39;t just mean the look of a product on the outside. Design
encompasses the internal functionality of a product as well as the overall user
experience. I strive to design interfaces and experiences that people can enjoy on all

digital media.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x"><i className="fas fa-circle fa-stack-2x text-primary"></i><i className="fas fa-lightbulb fa-stack-1x fa-inverse"></i></span>
                        <h4 className="my-3">Involvment</h4>
                        <p className="text-muted">As for extracurricular activities, I can tell that I&#39;m really active in sports. One of my
passions besides programming is basketball, which I trained for 8 years. Trough
that time, I learned many lessions about team work and discipline, that can be
very useful in my career. I also like skiing, football and going out with my friends.</p>
                    </div>
                </div>
            </div>
        </section>

    )
}