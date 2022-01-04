// React imports
import { useContext } from 'react';

// Context import
import { Context } from 'App';

// Components import
import WeekDay from './weekDay/WeekDay.jsx';

// Style import
import style from './WeekSection.module.scss';

const WeekSection = () => {
    const { weatherData } = useContext(Context);

    return (
        <div className={style.weekSection}>
            <h1>Week</h1>

            <div className={style.daysContainer}>
                {weatherData.daily.slice(1).map(dayData => // remove first day (today) because info are already in the sidebar
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