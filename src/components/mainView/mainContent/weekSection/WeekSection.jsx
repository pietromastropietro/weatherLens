import style from './WeekSection.module.scss';
import WeekDay from './weekDay/WeekDay.jsx';
import { Context } from 'App';
import { useContext } from 'react';

const WeekSection = () => {
    const { weatherData } = useContext(Context);

    return (
        <div className={style.weekSection}>
            <h1>Week</h1>

            <div className={style.daysContainer}>
                {weatherData.daily.slice(1).map(dayData =>
                    <WeekDay
                        key={dayData.dt}
                        dayData={dayData}
                    />
                )}
            </div>

        </div>
    )
}

export default WeekSection;