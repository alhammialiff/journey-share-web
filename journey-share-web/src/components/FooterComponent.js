import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

export const Footer = (props) => {

    return(
        <div className="footer">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm d-flex justify-content-center">
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
                <div class="row">
                    <div class="col-12 col-sm d-flex justify-content-center">
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-primary"><span class="fa fa-facebook"></span></button>
                            <button type="button" className="btn btn-warning"><span class="fa fa-instagram"></span></button>
                            <button type="button" className="btn btn-danger"><span class="fa fa-google-plus"></span></button>
                            <button type="button" className="btn btn-info"><span class="fa fa-linkedin"></span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
    
}

export default Footer;
