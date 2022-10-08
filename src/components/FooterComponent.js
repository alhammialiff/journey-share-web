import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

export const Footer = (props) => {

    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm d-flex justify-content-center">
                        <address>
                            JourneyShare Inc. <br/>
                            Golf Street, <br/>
                            North Reubma, <br/>
                            Kingdom of Floototoo <br/>
                            +123 456 789 <br/>
                            support@journeyshare.com <br/>
                        </address>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm d-flex justify-content-center">
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-primary"><span className="fa fa-facebook"></span></button>
                            <button type="button" className="btn btn-warning"><span className="fa fa-instagram"></span></button>
                            <button type="button" className="btn btn-danger"><span className="fa fa-google-plus"></span></button>
                            <button type="button" className="btn btn-info"><span className="fa fa-linkedin"></span></button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
    
}

export default Footer;
