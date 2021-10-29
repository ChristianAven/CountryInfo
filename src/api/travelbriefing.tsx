import axios from "axios";


const TravelAPI = axios.create({
    baseURL: 'https://travelbriefing.org/',
});

export default TravelAPI;