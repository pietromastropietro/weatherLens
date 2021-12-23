import style from './WeekDay.module.scss'
import { format } from 'date-fns';
import Icon from 'components/icon/Icon';

const WeekDay = ({ dayData }) => {
    const day = format(new Date(dayData.dt * 1000), 'EEE');
    const icon = dayData.weather[0].icon;

    const temp = {
        max: Math.round(dayData.temp.max),
        min: Math.round(dayData.temp.min)
    };

    return (
        <div className={style.day}>
            <p>{day}</p>

            <figure>
                <Icon name={icon} />
            </figure>

            <p>{`${temp.max}°`} <span>{`${temp.min}°`}</span></p>
        </div>
    )
}

export default WeekDay;