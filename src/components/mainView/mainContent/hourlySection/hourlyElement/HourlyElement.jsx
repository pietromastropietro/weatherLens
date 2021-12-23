import style from './HourlyElement.module.scss'
import { degToDirection } from 'services/helper/degToDirection';
import Icon from 'components/icon/Icon';

const HourlyElement = ({ hourlyData, unit }) => {
    
    const temp = hourlyData.temp.toFixed(1);
    const hour = new Date(hourlyData.dt * 1000).getHours();
    const forecast = hourlyData.weather[0].description;
    const rain = hourlyData.rain?.["1h"].toFixed(1) || '-';
    const icon = hourlyData.weather[0].icon;

    let wind = '-';
    let windDirection = '';

    if (hourlyData.wind_speed) {
        if (unit === "metric") {
            wind = Math.round(hourlyData.wind_speed * 3.6); // multiply per 3.6 to convert from m/s to km/h
        } else {
            wind = Math.round(hourlyData.wind_speed * 2.2); // multiply per 2.2 to convert from m/s to mp/h
        }
        windDirection = degToDirection(hourlyData.wind_deg);
    }

    return (
        <li className={style.hourlyElement}>
            <p>{hour}<span>:00</span></p>
            <figure>
                <Icon name={icon} />
            </figure>
            <p className={style.forecast}>{forecast}</p>
            <p>{`${temp}°`}</p>
            <p className={style.wind}>{wind}<br /><span>{windDirection}</span></p>
            <p className={style.rain}>{rain}</p>
        </li>
    );
}

export default HourlyElement;