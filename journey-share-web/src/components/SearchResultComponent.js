import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';

export const SearchResult = ({ location, index }) => {
    // const result = this.props.result;

    console.log("In SearchResult - ", location);


    return (

        <RenderRow location={location} index={index} />

    );
}

const RenderRow = ({ location, index }) => {

    return (
        <>

            <tr key={location.id}>
                <th>{index}</th>
                <td>{location.location}</td>
                <td>{location.dateFrom}</td>
                <td>{location.dateTo}</td>
                <td>{location.trekType}</td>
                <td>{location.pax}</td>
                <td>{location.country}</td>
                <td>{location.region}</td>
            </tr>

        </>

    );
}