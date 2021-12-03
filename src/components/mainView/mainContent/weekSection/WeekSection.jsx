import style from './WeekSection.module.scss';
import WeekDay from './weekDay/WeekDay.jsx'

const WeekSection = ({ dailyWeatherData }) => {
    // console.log("data: " + JSON.stringify(dailyWeatherData, null, 2));

    return (
        <div className={style.weekSection}>
            <h1>Week</h1>

            <div className={style.daysContainer}>
                {dailyWeatherData.slice(1).map(dayData =>
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