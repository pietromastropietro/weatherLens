// React import
import { useState, useContext } from 'react';

// Context import
import { Context } from 'App';

// Components import
import HourlyForecastListElement from './hourlyForecastListElement/HourlyForecastListElement';

// Style import
import style from './HourlyForecast.module.scss'

const HourlyForecast = () => {
    const { unit, weatherData } = useContext(Context);

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
        <div className={style.hourlyForecast}>
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
                    <p>Wind<br />{unit === "metric" ? "km/h" : "mp/h"}</p>
                    <p>Rain <br />mm</p>
                </div>
            </div>

            <ul>
                {hourlyWeather[day].map(hourlyData =>
                    <HourlyForecastListElement
                        key={hourlyData.dt}
                        hourlyData={hourlyData}
                        unit={unit}
                    />
                )}
            </ul>
        </div>
    );
}

export default HourlyForecast;