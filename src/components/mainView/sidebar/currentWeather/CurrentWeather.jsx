import { format } from 'date-fns';
import style from './CurrentWeather.module.scss';
import { Context } from 'App';
import { useContext } from 'react';
import UnitsSwitch from 'components/unitsSwitch/UnitsSwitch';
import Icon from 'components/icon/Icon';

const CurrentWeather = () => {
    const { unit, location, weatherData } = useContext(Context);

    const date = {
        day: format(new Date(weatherData.current.dt * 1000), 'EEEE'),
        time: format(new Date(weatherData.current.dt * 1000), 'H:mm')
    };

    const temp = Math.round(weatherData.current.temp);
    const forecast = weatherData.current.weather[0].description;
    const icon = weatherData.current.weather[0].icon;

    return (
        <div className={style.currentWeather}>

            <div className={style.header}>
                <h1>{location.name}, <span>{location.country}</span></h1>
                <p>{date.day}, <span>{date.time}</span></p>

                <div className={style.UnitsSwitchContainer}>
                    <UnitsSwitch />
                </div>
            </div>

            <div className={style.weather}>
                <figure>
                    <Icon name={icon} />
                </figure>

                <div className={style.temp}>
                    <h2>{temp}</h2>
                    <p>°{unit === "metric" ? "C" : "F"}</p>
                </div>

                <p>{forecast}</p>
            </div>

        </div>
    );
};

export default CurrentWeather;