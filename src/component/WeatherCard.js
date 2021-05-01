import React from 'react';
import axios from '../utils/api';
import Card from './Card';

class WeatherCard extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { weather: {}, lat: null, lon: null }
    }

    getWeather()
    {
        axios.get('/weather', {
            params: { lat: this.state.lat, lon: this.state.lon, APPID: '84c375472712a1a880ffba2edbc74476' }
        })
        .then(response => { 
                            this.setState({ weather: response.data })
                            console.log(this.state.weather.coord);
                        })
        .catch(err => console.log('Error: ' + err));
    }

    componentDidMount()
    {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ lat: position.coords.latitude });
                this.setState({ lon: position.coords.longitude });
                this.getWeather();
            },
            error => {
                this.setState({ error: error });
            }
        );
        
    }

    render()
    {
        return (
            <div>
                <Card weather={this.state.weather} />
            </div>
        );
    }
};

export default WeatherCard;


// {coord: {…}, weather: Array(1), base: "stations", main: {…}, visibility: 10000, …}
// base: "stations"
// clouds: {all: 63}
// cod: 200
// coord: {lon: 73.736, lat: 18.669}
// dt: 1619876616
// id: 1273304
// main: {temp: 300.76, feels_like: 300.61, temp_min: 300.76, temp_max: 300.76, pressure: 1010, …}
// name: "Dehu"
// sys: {country: "IN", sunrise: 1619829452, sunset: 1619875596}
// timezone: 19800
// visibility: 10000
// weather: Array(1)
// 0: {id: 803, main: "Clouds", description: "broken clouds", icon: "04n"}
// length: 1
// __proto__: Array(0)
// wind: {speed: 0.62, deg: 69, gust: 1.