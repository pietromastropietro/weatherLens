import { format } from 'date-fns';
import style from './CurrentWeather.module.scss';

const CurrentWeather = ({ weatherData }) => {
    return (
        <div className={style.currentWeather}>
            <h1 className={style.cityName}>Temp</h1>

            <p className={style.date}>
                {format(new Date(weatherData.current.dt * 1000), 'EEEE, H:mm')}
            </p>

            <figure className={style.icon}>
                <img src="" alt="weather-icon" />
            </figure>

            <p className={style.temp}>
                {`${Math.round(weatherData.current.temp)}°C`}
            </p>
            
            <p className={style.forecast}>
                {weatherData.current.weather[0].description}
                {/* <div id="todayMinMaxForSmartphone"></div> */}
            </p>
        </div>
    );
};

export default CurrentWeather;