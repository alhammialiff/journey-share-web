import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';

export const SearchResult = ({ location }) => {
    // const result = this.props.result;
    var [index, setIndex] = useState(0);
    console.log("In SearchResult - ", location);


    return (

        <RenderRow location={location} />

    );
}

const RenderRow = ({location}) => {

    return (
        <>

            <tr key={location.id}>
                <th>0</th>
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