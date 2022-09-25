import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Label, Col, Row } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';

export const QuickSearch = () => {

    // What I need
    // States
    // Props to be passed into QuickSearch (can be done later)
    // Search Form

    const handleSubmit = (values)=>{
        console.log("In handleSubmit - ");
    };

    return (
        <div className="container">
            <div className="row row-content">
                <div className="col-12 col-md-9">
                    {/* Form */}
                    <Form model="search" onSubmit={(values) => handleSubmit(values)}>
                        <div className="form-inline justify-content-center">
                            {/* Form Input - Location */}
                            <Label htmlFor="location" md={2}> Search Location</Label>
                            <Row className="form-group">
                                <Control.text
                                    model=".location"
                                    className="form-control form-control-sm"
                                    id="location"
                                    name="location"
                                    placeholder="Mountain/National Park/Forest etc." />

                            </Row>
                        </div>

                    </Form>
                </div>
            </div>
        </div>
    );

}

export default QuickSearch;