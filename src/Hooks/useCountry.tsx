import {useEffect, useState} from 'react';
import { Country } from '../interfaces/countriesInterface';
import TravelAPI from '../api/travelbriefing';

export interface CountryState {
    country: Country;
}

interface Props {
    nameCountry: string
}

const useCountry = ({nameCountry}: Props) => {
    
    const [ isLoading, setIsLoading ] = useState(true);
    const [ countryState, setCountriesState ] = useState<CountryState>();

    

    const getCountry = async() => {
        const CountryPromise = TravelAPI.get(`${nameCountry}?format=json`);
        const resp = await CountryPromise;

        setCountriesState({
            country: resp.data,
        });
        
        setIsLoading(false);
    }

    useEffect(() => {

        getCountry();
        
    }, [])

    return {
        isLoading,
        countryState
    }

}
export default useCountry