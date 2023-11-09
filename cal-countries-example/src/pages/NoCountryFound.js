import React from 'react';
import { useParams } from 'react-router-dom';

const NoCountryFound = () => {
    // const { unknown } = useParams();

    return (
        <>
            <p>No country was found</p>
        </>
    );
}

export default NoCountryFound;
