import { useState } from 'react';
import style from './HourlySection.module.scss'
import HourlyElement from './hourlyElement/HourlyElement';
import { LoadingContext } from 'App';
import { useContext } from 'react';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';

const HourlySection = ({ hourlyWeatherData }) => {
    const loading = useContext(LoadingContext);

    // Calculate how many hours remain until midnight (first element of hourlyWeatherData refers to the hour in which the request has been made)
    const hoursLeftUntilMidnight = 24 - (new Date(hourlyWeatherData[0].dt * 1000).getHours());

    const weatherData = {
        // Get weather data until today's midnight
        today: hourlyWeatherData.slice(0, hoursLeftUntilMidnight),
        // Get weather data from today's midnight until tomorrow's midnight
        tomorrow: hourlyWeatherData.slice(hoursLeftUntilMidnight, hoursLeftUntilMidnight + 24)
    }

    const [day, setDay] = useState("today");

    return (
        <div className={style.hourlySection}>
            <div className={style.days}>
                <h1
                    onClick={() => setDay("today")}
                    className={day === "today" && style.active}
                >
                    Today
                </h1>

                <h1
                    onClick={() => setDay("tomorrow")}
                    className={day === "tomorrow" && style.active}
                >
                    Tomorrow
                </h1>
            </div>

            <div className={style.labels}>
                <p>Time</p>
                <p></p>
                <p>Conditions</p>
                <p>Temp</p>
                <p>Wind</p>
                <p>Rain</p>
            </div>

            {loading.loading ? <LoadingSpinner /> :
                <ul>
                    {weatherData[day].map(hourlyData =>
                        <HourlyElement
                            key={hourlyData.dt}
                            hourlyData={hourlyData}
                        />
                    )}
                </ul>
            }
        </div>
    );
}

export default HourlySection;