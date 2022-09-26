import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';

export const SearchResult = ({ location }) => {
    // const result = this.props.result;
    var [index, setIndex] = useState(0);
    console.log("In SearchResult - ", location);


    const renderResult = (location) => {

        return (
            <tr>
                <th>{setIndex(index++)}</th>
                <td>{location.location}</td>
                <td>{location.dateFrom}</td>
                <td>{location.dateTo}</td>
                <td>{location.trekType}</td>
                <td>{location.pax}</td>
                <td>{location.country}</td>
                <td>{location.region}</td>
            </tr>

        );
    }

    return (

        <Table>
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
                {renderResult}
            </tbody>
        </Table>

    );

}