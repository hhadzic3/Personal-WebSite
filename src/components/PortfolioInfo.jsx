import React from 'react'

export default () => {
    return(
        <div className="portfolio-modal modal fade" id="portfolioModal1"  role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-dismiss="modal">X</div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    <h2 className="text-uppercase">Project Name</h2>
                                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                    <button className="btn btn-primary" data-dismiss="modal" type="button"><i class="fab fa-github"></i> View Code</button>
                                    <button className="btn btn-primary" data-dismiss="modal" type="button"><i class="fas fa-external-link-alt"></i> View Demo</button>
                                    <button className="btn btn-secondary" data-dismiss="modal" type="button"><i className="fas fa-times mr-1"></i> Close </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}