import React from 'react';
import { JumbotronComponent } from './JumbotronComponent';

export const WelcomePage = ({jumbotronHeader}) => {

    return (
        <>
            <header>
                <JumbotronComponent jumbotronHeader={jumbotronHeader} />
            </header>
            <main>
                <div className="container">
                    {/* <!-- [Login Component] --> */}
                    <div className="row">
                        {/* <!-- [Login Component - Email Login] --> */}
                        <div id="main-left" className="col-12 col-sm-6">
                            <div className="row">
                                {/* <!-- justify-content-center requires d-flex --> */}
                                <div className="col-12 d-flex justify-content-center">
                                    <h3>Join with Email</h3>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 col-sm">
                                    <form>
                                        <div className="form-row justify-content-center">
                                            <label className="form-group col-12 col-sm-3">
                                                Username
                                            </label>
                                            <input type="text" className="form-control form-control-sm col-sm-6 mr-2"
                                                placeholder="Email" />
                                        </div>
                                        <div className="form-row justify-content-center">
                                            <label className="form-group col-12 col-sm-3">
                                                Email
                                            </label>
                                            <input type="email" className="form-control form-control-sm col-sm-6 mr-2"
                                                placeholder="Email" />
                                        </div>
                                        <div className="form-row justify-content-center">
                                            <label className="form-group col-12 col-sm-3">
                                                Password
                                            </label>
                                            <input type="password" className="form-control form-control-sm col-sm-6 mr-2"
                                                placeholder="Create Password" />
                                        </div>
                                        <div className="form-row justify-content-center">
                                            <label className="form-group col-12 col-sm-3">
                                                Confirm Password
                                            </label>
                                            <input type="password" className="form-control form-control-sm col-sm-6 mr-2"
                                                placeholder="Confirm Password" />
                                        </div>
                                        <div className="form-row justify-content-center">
                                            <button type="submit" className="btn btn-primary">Sign Up</button>
                                        </div>
                                    </form>

                                </div>
                            </div>

                        </div>
                        {/* <!-- [Login Component - Social Login] --> */}
                        <div id="main-right" className="col-12 col-sm-6">
                            <div className="row">
                                <div className="col-12 d-flex justify-content-center">
                                    <h3>Join with Socials</h3>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 col-sm d-flex justify-content-center">
                                    <button type="button" className="btn btn-primary social-sign-up-btn">
                                        <span className="fa fa-facebook"></span>
                                        Join with Facebook
                                    </button>
                                </div>
                            </div>

                            <div className="row">

                                <div className="col-12 col-sm d-flex justify-content-center">
                                    <button type="button" className="btn btn-danger social-sign-up-btn" width="180px">
                                        <span className="fa fa-google-plus"></span>
                                        Join with Google+
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </main>
        </>
    );

}

export default WelcomePage;