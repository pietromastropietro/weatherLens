import style from './WeekSection.module.scss';
import WeekDay from './weekDay/WeekDay.jsx';
import { LoadingContext } from 'App';
import { useContext } from 'react';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';

const WeekSection = ({ dailyWeatherData }) => {
    // console.log("data: " + JSON.stringify(dailyWeatherData, null, 2));
    const loading = useContext(LoadingContext);

    return (
        <div className={style.weekSection}>
            <h1>Week</h1>

            {loading.loading ? <LoadingSpinner /> :
                <div className={style.daysContainer}>
                    {dailyWeatherData.slice(1).map(dayData =>
                        <WeekDay
                            key={dayData.dt}
                            dayData={dayData}
                        />
                    )}
                </div>
            }
        </div>
    )
}

export default WeekSection;