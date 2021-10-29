import React, { createContext, useState } from 'react';
import { Countries, Country } from '../interfaces/countriesInterface';
import useCountries from '../Hooks/useCountries';
import { useEffect } from 'react';
import useCountry from '../Hooks/useCountry';

interface ContextProps {
    countries: Countries[];
}

export const CountriesContext = createContext({} as ContextProps); 


export const CountriesProvider = ({ children }: any) => {

    const {countriesState} = useCountries();
    const [countries, setCountries] = useState<Countries[]>([]);

    useEffect(() => {
        setCountries(countriesState.countries);
    }, [countriesState])

    return (
        <CountriesContext.Provider value={{
            countries,
        }}>
            { children }
        </CountriesContext.Provider>
    )

}

