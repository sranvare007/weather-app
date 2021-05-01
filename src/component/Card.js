import React from 'react';
import '../css/Card.css';
import img from '../utils/sun.jpg';

class Card extends React.Component
{
    render()
    {
        return (
            <div className="card-container">
                <img src={img} alt="Weather-img" style={{ width: '70%', height: '150px' }}/>
                <div className="card-content">
                    <h2 className="card-header">{this.props.weather?.name}, {this.props.weather?.sys?.country}</h2>
                    <p>Weather: <span className="content-val">{this.props.weather?.weather?.[0]?.main}</span></p>
                    <p>Temperature: <span className="content-val">{Math.round(this.props.weather?.main?.temp - 273.15)} &#x2103;</span></p>
                    <p>Sunrise: <span className="content-val">{ new Date(this.props.weather?.sys?.sunrise * 1000).toString().split("GMT")[0] }</span></p>
                    <p>Sunset: <span className="content-val">{ new Date(this.props.weather?.sys?.sunset * 1000).toString().split("GMT")[0] }</span></p>
                </div>
            </div>
        );
    }
}


export default Card;