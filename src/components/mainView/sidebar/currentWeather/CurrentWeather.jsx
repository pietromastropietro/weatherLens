// React import
import { useContext } from 'react';

// Utils import
import { format } from 'date-fns';

// Context import
import { Context } from 'App';

// Components import
import UnitsSwitch from 'components/unitsSwitch/UnitsSwitch';
import WeatherIcon from 'components/weatherIcon/WeatherIcon';

// Style import
import style from './CurrentWeather.module.scss';

const CurrentWeather = () => {
    const { unit, location, weatherData } = useContext(Context);

    const date = {
        day: format(new Date(weatherData.current.dt * 1000), 'EEEE'),
        time: format(new Date(weatherData.current.dt * 1000), 'H:mm')
    };

    const temperature = Math.round(weatherData.current.temp);
    const forecast = weatherData.current.weather[0].description;
    const icon = weatherData.current.weather[0].icon;

    return (
        <div className={style.currentWeather}>
            <div className={style.header}>
                <h1>{location.name}, <span>{location.country}</span></h1>

                <p>{date.day}, <span>{date.time}</span></p>
    
                <div className={style.unitsSwitchContainer}>
                    <UnitsSwitch />
                </div>
            </div>

            <div className={style.weather}>
                <figure>
                    <WeatherIcon name={icon} />
                </figure>

                <div className={style.temp}>
                    <h2>{temperature}</h2>
                    <p>°{unit === "metric" ? "C" : "F"}</p>
                </div>

                <p className={style.forecast}>{forecast}</p>
            </div>
        </div>
    );
};

export default CurrentWeather;