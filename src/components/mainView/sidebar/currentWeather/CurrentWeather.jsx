import { format } from 'date-fns';
import useImage from 'services/helper/useImage';
import style from './CurrentWeather.module.scss';

const CurrentWeather = ({ currentWeatherData }) => {
    const { image: icon, loading, error } = useImage(currentWeatherData.weather[0].icon);

    const date = format(new Date(currentWeatherData.dt * 1000), 'EEEE, H:mm');
    const temp = Math.round(currentWeatherData.temp);
    const forecast = currentWeatherData.weather[0].description;

    return (
        <div className={style.currentWeather}>
            <h1 className={style.cityName}>Cityname</h1>

            <p className={style.date}>{date}</p>

            <figure>
                <img src={icon} alt="weather conditions" />
            </figure>

            <p className={style.temp}>{`${temp}°C`}</p>
            
            <p className={style.forecast}>
                {forecast}
                {/* <div id="todayMinMaxForSmartphone"></div> */}
            </p>
        </div>
    );
};

export default CurrentWeather;