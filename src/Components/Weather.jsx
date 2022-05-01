import { useEffect, useState } from 'react';

const Weather = () => {
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();
    const [weatherIcon, setWeatherIcon] = useState();
    const [temperature, setTemperature] = useState();
    const [location, setLocation] = useState();

    const getWeather = () => {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=919713f30664d4de5f102f4c1026781e`,
        )
            .then((response) => response.json())
            .then((response) => {
                setLocation(response.name);
                setTemperature(Math.round(response.main.temp - 273));
                setWeatherIcon(
                    `https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`,
                );
            });
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        });
    }, []);

    useEffect(() => {
        latitude && longitude && getWeather();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [latitude, longitude]);

    return (
        <div className="weather">
            <div className="icon">
                <img src={weatherIcon} alt="weather icon" />
            </div>
            <div className="temperature">
                {temperature}
                <span>&#176;</span>
            </div>
            <div className="location">{location}</div>
        </div>
    );
};

export default Weather;
