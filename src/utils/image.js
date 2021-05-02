const getImage = (weather) => {
    switch(weather){
        case "Clouds": return 'black-cloud.png';
        case "Clear": return 'clouds.png';
        case "Mist": return 'mist.png';
        case "Snow": return 'snowflake.png';
        case "Rain": return 'raining.png';
        case "Thunderstorm": return 'thunderstorm.png';
        default: return 'sun.png';
    }
}

export default getImage;