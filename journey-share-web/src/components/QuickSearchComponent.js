import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Label, Col, Row } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';

import { SearchResult } from './SearchResultComponent';

export const RenderSearchResult = (filteredLocations) => {

    console.log("In RenderSearchResult - filteredLocation", filteredLocations);
    var resultRow = filteredLocations.map((location) => {
        return (
            <SearchResult location={location} />
        );
    })

    return resultRow;
}

export const QuickSearch = ({ treks, search, postSearchQuery }) => {

    // What I need
    // States
    // Props to be passed into QuickSearch (can be done later)
    // Search Form

    const searchQuery = (values, treks) => {
        // Filter by location
        var filteredLocations = treks.filter(function (trek) {
            console.log(trek.location);
            console.log(values.location);

            return trek.location == values.location ? trek : "";
        })

        console.log('In searchQuery - filteredLocations', filteredLocations);

        // RenderSearchResult(filteredLocations);

        return filteredLocations;

    }

    const handleSubmit = (values) => {
        console.log("In handleSubmit - values", values);
        console.log("In handleSubmit - treks", treks);
        console.log("In handleSubmit - search", search);
        // console.log("In handleSubmit - search.location", search.location);
        postSearchQuery(values.location, values.trekType, values.pax, values.country, values.region, values.dateFrom, values.dateTo);
        searchQuery(values, treks);

    };

    return (
        <div className="container" id="search-section">
            <div className="row">
                <div className="col-12 col-sm">
                    <div className="row border-bottom p-3">
                        <div className="col-12 d-flex justify-content-center">
                            <h2>Find a trek</h2>
                        </div>
                    </div>
                    <div className="row row-content">
                        <div className="col-12 col-md p-3">
                            {/* Form */}
                            <Form model="search" onSubmit={(values) => handleSubmit(values)}>
                                {/* Form - 1st Row */}
                                <div className="form-inline justify-content-center p2">
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

                                    <Label htmlFor="trekType" md={2}>Trek Type</Label>
                                    <Row className="form-group">
                                        <Control.select model=".trekType" id="trekType" className="dropdown btn dropdown-toggle">
                                            <option value="forest">Forest Trek</option>
                                            <option value="mountain">Mountain Trek</option>
                                        </Control.select>
                                    </Row>

                                    <Label htmlFor="pax" md={2}>Pax</Label>
                                    <Row className="form-group">
                                        <Control.select model=".pax" id="pax" className="dropdown btn dropdown-toggle">
                                            <option value="0-5">0-5</option>
                                            <option value="5-10">5-10</option>
                                            <option value="10+">10-15</option>
                                        </Control.select>
                                    </Row>
                                </div>
                                {/* Form - 2nd Row */}
                                <div className="form-inline justify-content-center p-2">
                                    <Label htmlFor="country" md={2}>Country</Label>
                                    <Row className="form-group">
                                        <Control.select model=".country" id="country" className="dropdown btn dropdown-toggle">
                                            <option value="singapore">Singapore</option>
                                            <option value="japan">Japan</option>
                                        </Control.select>
                                    </Row>
                                    <Label htmlFor="region" md={2}>Region</Label>
                                    <Row className="form-group">
                                        <Control.select model=".region" id="region" className="dropdown btn dropdown-toggle">
                                            <option value="Asia">Asia</option>
                                            <option value="Oceania">Oceania</option>
                                        </Control.select>
                                    </Row>
                                </div>

                                {/* Form - 3rd Row */}
                                <div className="form-inline justify-content-center p-2">
                                    <Label htmlFor="dateFrom" md={2}>From</Label>
                                    <Row className="form-group">
                                        <Control type="date" model=".dateFrom" id="dateFrom" className="form form-control">
                                        </Control>
                                    </Row>
                                    <Label htmlFor="country" md={2}>To</Label>
                                    <Row className="form-group">
                                        <Control type="date" model=".dateTo" id="dateTo" className="form form-control">
                                        </Control>
                                    </Row>
                                </div>

                                <div className="form-row justify-content-center p-2">
                                    <Button type="submit" id="find-trek-btn" className="btn btn-lg btn-success">Find Trek</Button>
                                </div>

                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm">
                    {/* <RenderSearchResult result= { filteredLocations }/> */}
                </div>
            </div>
        </div>
    );

}

export default QuickSearch;