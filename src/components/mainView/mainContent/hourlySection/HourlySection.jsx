import { useState } from 'react';
import style from './HourlySection.module.scss'
import HourlyElement from './hourlyElement/HourlyElement';

const HourlySection = ({ hourlyWeatherData }) => {
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

            <div className={style.heading}>
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

                <div className={style.weatherLabels}>
                    <p>Wind<br />km/h</p>
                    <p>Rain <br />mm </p>
                </div>
            </div>

            <ul>
                {weatherData[day].map(hourlyData =>
                    <HourlyElement
                        key={hourlyData.dt}
                        hourlyData={hourlyData}
                    />
                )}
            </ul>
        </div>
    );
}

export default HourlySection;