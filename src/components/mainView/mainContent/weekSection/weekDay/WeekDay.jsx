import style from './WeekDay.module.scss'
import { format } from 'date-fns';
import useImage from 'services/helper/useImage';

const WeekDay = ({ dayData }) => {
    const { image: icon, loading, error } = useImage(dayData.weather[0].icon)

    const day = format(new Date(dayData.dt * 1000), 'EEE');
    
    const temp = {
        max: Math.round(dayData.temp.max),
        min: Math.round(dayData.temp.min)
    }; 

    return (
        <div className={style.day}>
            <p>{day}</p>

            <img src={icon} alt="weather conditions" />

            <p>{`${temp.max}°`} <span>{`${temp.min}°`}</span></p>
        </div>
    )
}

export default WeekDay;