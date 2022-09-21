import React from 'react';
import './Country.css';

const Country = (props) => {
    const {flags, name, region, area} = props.country;
    return (
        <div className='CountryStyle'>
            <img src={flags.png} alt="flags" /><br />
            <h4>{name.common}</h4>
            <span><strong>Region:</strong> {region}</span><br />
            <span><strong>Area:</strong> {area} km<sup>2</sup></span>
        </div>
    );
};

export default Country;