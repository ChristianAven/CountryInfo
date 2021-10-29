import {useEffect, useState} from 'react';
import { Countries } from '../interfaces/countriesInterface';
import TravelAPI from '../api/travelbriefing';

interface CountriesState {
    countries: Countries[];
}

const useCountries = () => {

    const [ isLoading, setIsLoading ] = useState(true);
    const [ countriesState, setCountriesState ] = useState<CountriesState>({countries: []})

    const getCountries = async() => {
        const CountriesPromise = TravelAPI.get("countries.json");
        const resp = await CountriesPromise;
        setCountriesState({
            countries: resp.data,
        });
        
        setIsLoading(false);
    }

    useEffect(() => {

        getCountries();
        
    }, [])

    return {
        isLoading,
        countriesState
    }

}
export default useCountries