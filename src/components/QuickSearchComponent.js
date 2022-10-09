import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Label, Col, Row, Table, InputGroup, InputGroupText } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';
import { ConfigureStore } from '../redux/configureStore';

import { SearchResult } from './SearchResultComponent';

// Declare store state var 
var store = ConfigureStore();

// Render search result based on processSearch
export const RenderSearchResult = ({ search, treks }) => {
    console.log("RenderSearchResult - search", search);

    if (search.search == undefined) {
        return (
            <div>
            </div>
        )

    } else {

        var searchResult = processSearch(search);
        var searchQuery = search.location;
        console.log("In RenderSearchResult - searchResult", searchResult);

        var searchIndex = 0;

        var resultRow = searchResult.map((location) => {

            return (
                <SearchResult location={location} index={++searchIndex} />
            );
        });

        return (
            <div className="row">
                <div className="col-12 col-sm">

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
                </div>
            </div>
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
        // var filteredLocations = treks.filter(function (trek) {
        //     // console.log(trek.location);
        //     // console.log(search.location);

        //     return trek.location == search.location ? trek : "";
        // })
        var filteredLocations = checkMatch(search);

        console.log('In processSearch - filteredLocations', filteredLocations);

        // [Debug]
        // RenderSearchResult(filteredLocations);

        return filteredLocations;
    }


}

// [TO-DO] RegMatch on input change for auto-completion feature
const checkMatch = (inputVal) => {
    // console.log("Changed: ", inputVal);
    // console.log("trek-",treks);
    const treks = store.getState().treks.TREKS;
    var regStr = inputVal.location + '.*';
    const regExp = new RegExp(regStr, 'gi');
    var regMatch = treks.filter(trek => trek.location.match(regExp));

    console.log("regExp - ", regExp);
    console.log("regMatch - ", regMatch);



    return regMatch;

}

export const AdvancedSearchInputs = () => {

    return (
        <>
            <div className='row mt-1'>
                <div className='col-12 col-sm form-inline justify-content-center m-2'>
                    <Control.select model=".trekType" name="trekType" id="trekType" className="dropdown btn dropdown-toggle mr-2">
                        <option>Forest Trek</option>
                        <option>Mountain Trek</option>
                    </Control.select>

                    <Control.select model=".pax" name="pax" id="pax" className="dropdown btn dropdown-toggle">
                        <option value="0-5">0-5</option>
                        <option value="5-10">5-10</option>
                        <option value="10+">10-15</option>
                    </Control.select>
                </div>
            </div>
            {/* Form - 3rd Row */}
            <div className='row'>
                <div className="col-12 col-sm form-inline justify-content-center m-2">

                    <Control.select model=".country" name="country" id="country" className="dropdown btn dropdown-toggle mr-2">
                        <option value="placeholder">Country</option>
                        <option value="singapore">Singapore</option>
                        <option value="japan">Japan</option>
                    </Control.select>


                    <Control.select model=".region" name="region" id="region" className="dropdown btn dropdown-toggle">
                        <option value="placeholder">Region</option>
                        <option value="asia">Asia</option>
                        <option value="oceania">Oceania</option>
                        <option value="europe">Europe</option>
                        <option value="north-america">North America</option>
                        <option value="south-america">South America</option>
                        <option value="africa">Africa</option>
                    </Control.select>
                </div>
                {/* Form - 3rd Row */}
            </div><div className='row'>
                <div className="col-12 col-sm form-inline justify-content-center m-2">


                    <Control type="date" model=".dateFrom" id="dateFrom" className="form form-control mr-sm-2" placeholder='From'>
                    </Control>

                    <Control type="date" model=".dateTo" id="dateTo" className="form form-control mt-1 mt-sm-0">
                    </Control>

                </div>
            </div>


        </>
    );
}

export const QuickSearch = ({ treks, search, postSearchQuery }) => {

    // What I need
    // States
    // Props to be passed into QuickSearch (can be done later)
    // Search Form

    const [display, setDisplay] = useState(false);


    const handleSubmit = (inputVal) => {
        // [Debugs]
        // console.log("In handleSubmit - inputVal", inputVal);
        // console.log("In handleSubmit - treks", treks);
        // console.log("In handleSubmit - search", search);
        // console.log("In handleSubmit - search.location", search.location);

        postSearchQuery(inputVal.location, inputVal.trekType, inputVal.pax, inputVal.country, inputVal.region, inputVal.dateFrom, inputVal.dateTo);

        console.log("In handleSubmit - store.getState().search", store.getState().forms)

    };

    const toggleAdvancedSearch = () => {
        // var advancedSearchInputs = document.getElementsByClassName('hidden-search-inputs');

        // console.log(advancedSearchInputs);
        setDisplay(!display);
        console.log(display);

    }

    return (
        <div className="container">
            <div className="row mt-3 apply-shadow" id="search-section">
                <div className="col-12 col-sm">
                    <div className="row border-bottom p-3">
                        <div className="col-12 d-flex justify-content-center">
                            <h2>Find a trek</h2>
                        </div>
                    </div>
                    <div className="row row-content">
                        <div className="col-12 col-md p-3">
                            {/* Form */}
                            <Form model="search" onSubmit={(user) => handleSubmit(user)} onChange={(inputVal) => checkMatch(inputVal)}>
                                <div className='row'>
                                    {/* Form - 1st Row */}
                                    <div className="col-12 col-sm form-inline justify-content-center">
                                        {/* Form Input - Location */}
                                        <InputGroup>
                                            <InputGroupText className="prepended-icons">
                                                <span className='fa fa-search'></span>
                                            </InputGroupText>
                                            <Control.text
                                                model=".location"
                                                className="form-control"
                                                id="location"
                                                name="location"
                                                size="80"
                                                placeholder="Mountain/National Park/Forest etc." />
                                            <Button onClick={() => toggleAdvancedSearch()}>
                                                ...
                                            </Button>
                                        </InputGroup>
                                    </div>
                                </div>

                                {display && <AdvancedSearchInputs />}

                                <div className='row justify-content-center'>
                                    <div className="form-row p-2">
                                        <Button type="submit" id="find-trek-btn" className="btn btn-lg btn-success">Find Trek</Button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-12 col-sm">
                    <RenderSearchResult search={search} trek={treks} />
                </div>
            </div>
        </div>

    );

}

export default QuickSearch;