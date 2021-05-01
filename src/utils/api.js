import axios from 'axios';

export default axios.create({
    baseURL: "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5",
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
});

//https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?lat=