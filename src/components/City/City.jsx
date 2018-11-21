import React from 'react';

// Components
import CityDetails from './CityDetails/CityDetails';

// Style
import './City.scss';

const City = ( { 
    city,
    setVisibleCity,
    visibleCity
 } ) => {   
    return (
        <article
            className='city'
        >
            <button className='city__name' onClick={ () => setVisibleCity(city.id) }>{ city.city }</button>
            
        {
            visibleCity === city.id && 
            <CityDetails
            details = { city }
            />
        }
        </article>
    );
};

export default City;