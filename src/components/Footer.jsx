import React from 'react'

export default () => {
    return(
        <footer className="footer py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-left">Designed & Built by Harun Hadžić 2020</div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <a className="btn btn-dark btn-social mx-2" target = "_blank" href="https://github.com/hhadzic3">
                            <i className="fab fa-github"></i>
                        </a>
                        <a className="btn btn-dark btn-social mx-2" target = "_blank" href="https://www.instagram.com/harunhadzic/">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a className="btn btn-dark btn-social mx-2" target = "_blank" href="https://www.facebook.com/harun.hadzic/">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a className="btn btn-dark btn-social mx-2" target = "_blank" href="https://www.linkedin.com/in/harun-had%C5%BEi%C4%87-4798b91b0/">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                    <div className="col-lg-4 text-lg-right">
                        <a className="mr-3"><i class="fas fa-envelope"></i>  harun.hadzic17@gmail.com</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}