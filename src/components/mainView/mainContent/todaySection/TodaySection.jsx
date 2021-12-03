import style from './TodaySection.module.scss'
import { format } from 'date-fns';
import HourlyElement from './hourlyElement/HourlyElement';

const TodaySection = ({ hourlyWeatherData }) => {
    return (
        <div className={style.todaySection}>
            <h1>Today</h1>

            <div className={style.listContainer}>
                <div className={style.labels}>
                    <p>Time</p>
                    <p></p>
                    <p>Conditions</p>
                    <p>Temp</p>
                    <p>Wind</p>
                    <p>Rain</p>
                </div>

                <ul>
                    {hourlyWeatherData.map(hourlyData =>
                        <HourlyElement
                            key={hourlyData.dt}
                            hourlyData={hourlyData}
                        />
                    )}
                </ul>
            </div>
        </div>
    );
}

export default TodaySection;