import React from 'react';
import axios from '../utils/api';
import Card from './Card';
import '../css/WeatherCard.css';

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
                            this.setState({ weather: response.data });
                        })
        // .catch(err => console.log('Error: ' + err));
        .catch((error) => {
            if(error) {
                if(window.confirm("You will need to request for demo from api server! Continue?"))
                {
                    window.location.href = 'https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5';
                }
            }
        });
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
                <div className="card-container">
                    <Card weather={this.state.weather} />
                </div>
            </div>
        );
    }
};

export default WeatherCard;