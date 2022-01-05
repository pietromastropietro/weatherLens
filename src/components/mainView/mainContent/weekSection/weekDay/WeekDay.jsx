// Components import
import WeatherIcon from 'components/weatherIcon/WeatherIcon';

// Style import
import style from './WeekDay.module.scss'

// Utils import
import { format } from 'date-fns';

const WeekDay = ({ dayData }) => {
    const day = format(new Date(dayData.dt * 1000), 'EEE');
    const icon = dayData.weather[0].icon;

    const temps = {
        max: Math.round(dayData.temp.max),
        min: Math.round(dayData.temp.min)
    };

    return (
        <div className={style.day}>
            <p>{day}</p>

            <figure>
                <WeatherIcon name={icon} />
            </figure>

            <p>{`${temps.max}°`} <span>{`${temps.min}°`}</span></p>
        </div>
    )
}

export default WeekDay;