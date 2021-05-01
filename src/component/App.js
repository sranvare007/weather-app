import React from 'react';
import WeatherCard from './WeatherCard';

class App extends React.Component
{
    // constructor(props)
    // {
    //     super(props);
    //     this.state = { lat: null, lon: null, error: '' }
    // }

    // componentDidMount()
    // {
    //     window.navigator.geolocation.getCurrentPosition(
    //         position => {
    //             this.setState({ lat: position.coords.latitude });
    //             this.setState({ lon: position.coords.longitude });
    //         },
    //         error => {
    //             this.setState({ error: error });
    //         }
    //     );
    // }

    render()
    {
        return (
            <div>
                <WeatherCard /*lat={this.state.lat} lon={this.state.lon}*/ />
            </div>
        );
    }
};

export default App;