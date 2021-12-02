import style from './WeekSection.module.scss';
import WeekDay from './weekDay/WeekDay.jsx'

const WeekSection = ({ weatherData }) => {
    console.log("data: " + JSON.stringify(weatherData, null, 2));

    return (
        <div className={style.weekSection}>
            <h1>Week</h1>

            <div className={style.daysContainer}>
                {weatherData.map(day =>
                    <WeekDay
                        key={day.dt}
                        day={day.dt}
                        icon=""
                        temps={day.temp}
                    />
                )}
            </div>
        </div>
    )
}

export default WeekSection;