import React from 'react';
import '../css/Card.css';
import Spinner from './Spinner';
import getImage from '../utils/image';
class Card extends React.Component
{
    render()
    {
        if(Object.keys(this.props.weather).length !== 0)
        {
            // console.log(this.props.weather?.weather?.[0]?.main);
            // const img = getImage(this.props.weather?.weather?.[0]?.main);
            // console.log(this.img);
            return (
                <div>
                    <img src={getImage(this.props.weather?.weather?.[0]?.main) } alt="Weather-img" style={{ width: '150px', height: '150px' }}/>
                    <div className="card-content">
                        <h2 className="card-header">{this.props.weather?.name}, {this.props.weather?.sys?.country}</h2>
                        <hr />
                        <p>Weather: <span className="content-val">{this.props.weather?.weather?.[0]?.main}</span></p>
                        <p>Temperature: <span className="content-val">{Math.round(this.props.weather?.main?.temp - 273.15)} &#x2103;</span></p>
                        <p>Sunrise: <span className="content-val">{ new Date(this.props.weather?.sys?.sunrise * 1000).toString().split("GMT")[0] }</span></p>
                        <p>Sunset: <span className="content-val">{ new Date(this.props.weather?.sys?.sunset * 1000).toString().split("GMT")[0] }</span></p>
                    </div>
                </div>
            );
        }
        else
        {
            return <Spinner />;
        }
    }
}


export default Card;