import React from 'react';
import { Jumbotron } from 'reactstrap';
import { JumbotronComponent } from './JumbotronComponent';
import { QuickSearch } from './QuickSearchComponent';
import { SearchResult } from './SearchResultComponent';

export const HomePage = ({ jumbotronHeader, treks, search, postSearchQuery }) => {
    // What I need here
    // Jumbotron
    // Search Query
    // Search Result
    console.log("In HomePage - promos ", jumbotronHeader);
    console.log("In HomePage - treks ", treks);
    

    return (
        <>
            <JumbotronComponent jumbotronHeader={jumbotronHeader} />
            <QuickSearch treks={treks} search={search} postSearchQuery = {postSearchQuery} />
            {/* <SearchResult /> */}
        </>
    );
}