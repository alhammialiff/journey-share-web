import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Label, Col, Row, Table } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';
import { ConfigureStore } from '../redux/configureStore';

import { SearchResult } from './SearchResultComponent';

// Declare store state var 
var store = ConfigureStore();

// Render search result based on processSearch
export const RenderSearchResult = ({ search, treks }) => {
    console.log("RSR - search", search);

    if (search.search == undefined) {
        return (
            <div>
                <p>null</p>
            </div>
        )

    } else {

        var searchResult = processSearch(search);
        console.log("In RenderSearchResult - searchResult", searchResult);

        var searchIndex = 0;

        var resultRow = searchResult.map((location) => {
            
            return (
                <SearchResult location={location} index={++searchIndex} />
            );
        });

        return (
            <Table hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Location</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Type</th>
                        <th>Pax</th>
                        <th>Country</th>
                        <th>Region</th>
                    </tr>
                </thead>
                <tbody>
                    {resultRow}
                </tbody>
            </Table>
        );
    }



}

const processSearch = ({ search }) => {
    // Filter by location
    const treks = store.getState().treks.TREKS;

    console.log("store.getStore.treks -- ", treks)

    if (search == undefined) {
        console.log("If processSearch - search.search", search);
        return;
    } else {
        console.log("Else processSearch - search", search);
        // console.log("Else processSearch - treks", treks);
        var filteredLocations = treks.filter(function (trek) {
            // console.log(trek.location);
            // console.log(search.location);

            return trek.location == search.location ? trek : "";
        })

        console.log('In processSearch - filteredLocations', filteredLocations);

        // [Debug]
        // RenderSearchResult(filteredLocations);

        return filteredLocations;
    }


}

export const QuickSearch = ({ treks, search, postSearchQuery }) => {

    // What I need
    // States
    // Props to be passed into QuickSearch (can be done later)
    // Search Form



    const handleSubmit = (inputVal) => {
        // [Debugs]
        console.log("In handleSubmit - inputVal", inputVal);
        console.log("In handleSubmit - treks", treks);
        console.log("In handleSubmit - search", search);
        console.log("In handleSubmit - search.location", search.location);

        postSearchQuery(inputVal.location, inputVal.trekType, inputVal.pax, inputVal.country, inputVal.region, inputVal.dateFrom, inputVal.dateTo);
        // var filteredLocations = processSearch(search, treks);
        console.log("In handleSubmit - store.getState().search", store.getState().forms)
        // console.log("In handleSubmit - search result", filteredLocations)

    };

    return (
        <div className="container">
            <div className="row" id="search-section">
                <div className="col-12 col-sm">
                    <div className="row border-bottom p-3">
                        <div className="col-12 d-flex justify-content-center">
                            <h2>Find a trek</h2>
                        </div>
                    </div>
                    <div className="row row-content">
                        <div className="col-12 col-md p-3">
                            {/* Form */}
                            <Form model="search" onSubmit={(user) => handleSubmit(user)}>
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
                                        <Control.select model=".trekType" name="trekType" id="trekType" className="dropdown btn dropdown-toggle">
                                            <option>Forest Trek</option>
                                            <option>Mountain Trek</option>
                                        </Control.select>
                                    </Row>

                                    <Label htmlFor="pax" md={2}>Pax</Label>
                                    <Row className="form-group">
                                        <Control.select model=".pax" name="pax" id="pax" className="dropdown btn dropdown-toggle">
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
                                        <Control.select model=".country" name="country" id="country" className="dropdown btn dropdown-toggle">
                                            <option value="singapore">Singapore</option>
                                            <option value="japan">Japan</option>
                                        </Control.select>
                                    </Row>
                                    <Label htmlFor="region" md={2}>Region</Label>
                                    <Row className="form-group">
                                        <Control.select model=".region" name="region" id="region" className="dropdown btn dropdown-toggle">
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
                    <RenderSearchResult search={search} trek={treks} />
                </div>
            </div>
        </div>
    );

}

export default QuickSearch;