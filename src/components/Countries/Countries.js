import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const options = {method: 'GET', headers: {Authorization: ''}};
        const url = 'https://restcountries.com/v3.1/all';
        fetch(url, options)
            .then(response => response.json())
            .then(response => setCountries(response))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className='CountriesStyle'>
            {
                countries.map(country => <Country
                    country={country}
                    key={country.cca3}
                ></Country>)
            }
        </div>
    );
};

export default Countries;