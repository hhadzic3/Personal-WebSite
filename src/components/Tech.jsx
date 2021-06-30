import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

export default () => {
    
    useEffect(() => {
        AOS.init({duration:2000});
    }, [])

    return(
        <div className="py-5">
            <div className="container">
                <h2>SOME TECHNOLOGIES I'VE WORKED WITH: </h2>
                <div data-aos="slide-right" className="row justify-content-center">
                    <div className="tech"> 
                        <a href="#!"><i className="fab fa-html5 fa-5x"></i></a>
                    </div>
                    <div className="tech">
                        <a href="#!"><i className="fab fa-css3-alt fa-5x"></i></a>
                    </div>
                    <div className="tech">
                        <a href="#!"><i className="fab fa-js fa-5x"></i></a>
                    </div>
                    <div className="tech">
                        <a href="#!"><i className="fab fa-bootstrap fa-5x"></i></a>
                    </div>
                    <div className="tech">
                        <a href="#!"><i className="fab fa-angular fa-5x"></i></a>
                    </div>
                    <div className="tech">
                        <a href="#!"><i className="fab fa-react fa-5x"></i></a>
                    </div>
                </div>
                <div data-aos="slide-left" className="row justify-content-center">
                    <div className="tech"> 
                        <a href="#!"><i className="fab fa-java fa-5x"></i></a>
                    </div>
                    <div className="tech">
                        <a href="#!"><i className="fab fa-cuttlefish fa-5x"></i></a>
                    </div>
                    <div className="tech">
                        <a href="#!"><i className="fab fa-node fa-5x"></i></a>
                    </div>
                    <div className="tech">
                        <a href="#!"><i className="fas fa-database fa-5x"></i></a>
                    </div>
                </div>
                <div data-aos="slide-in" className="row justify-content-center">
                    <div className="tech"> 
                        <a href="#!"><i className="fab fa-git fa-5x"></i></a>
                    </div>
                    <div className="tech">
                        <a href="#!"><i className="fab fa-github fa-5x"></i></a>
                    </div>
                    <div className="tech">
                        <a href="#!"><i className="fab fa-linux fa-5x"></i></a>
                    </div>
                </div>
                
            </div>
        </div>
    )
}