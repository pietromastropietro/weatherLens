import { useState } from 'react';
import style from './HourlySection.module.scss'
import HourlyElement from './hourlyElement/HourlyElement';
import { Context } from 'App';
import { useContext } from 'react';

const HourlySection = () => {
    const { weatherData } = useContext(Context);

    // Calculate how many hours remain until midnight (first element of weatherData.hourly refers to the hour in which the request has been made)
    const hoursLeftUntilMidnight = 24 - (new Date(weatherData.hourly[0].dt * 1000).getHours());

    const hourlyWeather = {
        // Get weather data until today's midnight
        today: weatherData.hourly.slice(0, hoursLeftUntilMidnight),
        // Get weather data from today's midnight until tomorrow's midnight
        tomorrow: weatherData.hourly.slice(hoursLeftUntilMidnight, hoursLeftUntilMidnight + 24)
    }

    const [day, setDay] = useState("today");

    return (
        <div className={style.hourlySection}>

            <div className={style.heading}>
                <div className={style.days}>
                    <h1
                        onClick={() => setDay("today")}
                        className={day === "today" ? style.active : undefined}
                    >
                        Today
                    </h1>

                    <h1
                        onClick={() => setDay("tomorrow")}
                        className={day === "tomorrow" ? style.active : undefined}
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
                {hourlyWeather[day].map(hourlyData =>
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