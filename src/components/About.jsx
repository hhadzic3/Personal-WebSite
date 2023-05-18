import React from 'react'

export default ({history}) => {
    return(
        <section className="page-section" id="about">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">About</h2>
                <h3 className="section-subheading text-muted">I am a software engineer based in Vienna. Specializing in building (and occasionally designing)
                    exceptional applications, and everything in between.</h3>
            </div>
            <ul className="timeline">
            { history && history.map(( {title , subtitle , description,img} , i) =>            
                ( i % 2 === 0 ?
                    ( 
                        <React.Fragment key={title+i}>
                        <li data-aos="fade-right" key={title}>
                            <div className="timeline-image">
                                <img className="rounded-circle img-fluid" src={img} alt="" />
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>{title}</h4>
                                    <h4 className="subheading"> {subtitle} </h4>
                                </div>
                                <div className="timeline-body"><p className="text-muted">{description}</p></div>
                            </div>
                        </li>
                        { i === history.length-1 &&
                            <li data-aos="fade-in" key={i} className="timeline-inverted">
                                <div className="timeline-image">
                                    <h4>Be Part<br />Of My/Our<br />Story!</h4>
                                </div>
                            </li>
                        }
                        </React.Fragment>
                    ) :
                    (
                        <React.Fragment key={title+i}>
                        <li data-aos="fade-left" key={title} className="timeline-inverted">
                            <div className="timeline-image">
                                <img className="rounded-circle img-fluid" src={img} alt="" />
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>{title}</h4>
                                    <h4 className="subheading"> {subtitle} </h4>
                                </div>
                                <div className="timeline-body"><p className="text-muted">{description}</p></div>
                            </div>
                        </li>
                        </React.Fragment>
                    )
                )
                
            )}
            </ul>
        </div>
    </section>
    )
}