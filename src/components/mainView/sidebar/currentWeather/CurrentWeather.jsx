import { format } from 'date-fns';
import useImage from 'services/helper/useImage';
import style from './CurrentWeather.module.scss';
import { LoadingContext } from 'App';
import { useContext } from 'react';

const CurrentWeather = ({ currentWeatherData }) => {
    const { location } = useContext(LoadingContext);
    const { image: icon, loading, error } = useImage(currentWeatherData.weather[0].icon);

    let date = {
        day: format(new Date(currentWeatherData.dt * 1000), 'EEEE'),
        time: format(new Date(currentWeatherData.dt * 1000), 'H:mm')
    };

    // const day = format(new Date(currentWeatherData.dt * 1000), 'EEEE');
    // const time = format(new Date(currentWeatherData.dt * 1000), 'H:mm');
    const temp = Math.round(currentWeatherData.temp);
    const forecast = currentWeatherData.weather[0].description;

    return (
        <div className={style.currentWeather}>
            <h1>{location.name}, <span>{location.country}</span></h1>

            {/* <p>{day}, <span>{time}</span></p> */}
            <p>{date.day}, <span>{date.time}</span></p>

            <img src={icon} alt="weather conditions" />

            <div className={style.temp}>
                <h2>{temp}</h2>
                <p>°C</p>
            </div>

            <p>{forecast}</p>
        </div>
    );
};

export default CurrentWeather;