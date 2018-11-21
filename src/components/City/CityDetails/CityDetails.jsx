import React from 'react';

// Style
import './CityDetails.scss';

const CityDetails = ( { 
    details
 } ) => {
    const listOfPropertyNames = Object.keys(details);
    const renderDetails = properties => {
        return (
            <ul className="city-details">
                {
                    properties.map( property => { 
                        return (
                            details.hasOwnProperty(property) ? 
                            <li key={ `${property}:${details[property]}` } className="city-details__property"> {`${property}:  ${details[property]}`}</li> 
                            :
                            null
                            )
                    })             
                }   
            </ul>)
    }
    return (
        <article> { renderDetails(listOfPropertyNames) } </article>
    );
};

export default CityDetails;