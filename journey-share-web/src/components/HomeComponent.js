import React from 'react';
import { Jumbotron } from 'reactstrap';
import { JumbotronComponent } from './JumbotronComponent';
import { QuickSearch } from './QuickSearchComponent';

export const HomePage = ({ promos }) => {
    // What I need here
    // Jumbotron
    // Search Query
    // Search Result
    console.log("In HomePage - promos ", promos);

    return(
        <>
        <JumbotronComponent promos={ promos }/>
        <QuickSearch/>
        </>
    );
}