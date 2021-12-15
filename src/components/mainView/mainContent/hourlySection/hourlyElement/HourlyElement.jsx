import style from './HourlyElement.module.scss'
import useImage from 'services/helper/useImage';
import { degToDirection } from 'services/helper/degToDirection';

const HourlyElement = ({ hourlyData }) => {
    const { image: icon, loading, error } = useImage(hourlyData.weather[0].icon);

    const temp = hourlyData.temp.toFixed(1);
    const hour = new Date(hourlyData.dt * 1000).getHours();
    const forecast = hourlyData.weather[0].description;
    const wind = Math.round(hourlyData.wind_speed * 3.6) || '-'; // multiply per 3.6 to convert from m/s to km/h
    const rain = hourlyData.rain?.["1h"].toFixed(1) || '-';
    let windDirection = '';

    if (wind !== '-') {
        windDirection = degToDirection(hourlyData.wind_deg);
    }

    return (
        <li className={style.hourlyElement}>
            <p className={style.hour}>{hour}<span>:00</span></p>
            <img src={icon} alt="weather conditions" />
            <p className={style.forecast}>{forecast}</p>
            <p className={style.temp}>{`${temp}°`}</p>
            <p className={style.wind}>{wind}<br /><span>{windDirection}</span></p>
            <p className={style.rain}>{rain}</p>
        </li>
    );
}

export default HourlyElement;