import style from './WeatherStats.module.scss';
import { Context } from 'App';
import { useContext } from 'react';

const Weatherstats = () => {
    const { unit, weatherData } = useContext(Context);

    const temps = {
        min: Math.round(weatherData.daily[0].temp.min),
        max: Math.round(weatherData.daily[0].temp.max)
    }

    const forecast = weatherData.daily[0].weather[0].description;
    const rain = weatherData.daily[0].rain?.toFixed(1) || '-';
    let wind = '-'
    
    if (weatherData.daily[0].wind_speed) {
        if (unit === "metric") {
            wind = Math.round(weatherData.daily[0].wind_speed * 3.6); // multiply per 3.6 to convert from m/s to km/h
        } else {
            wind = Math.round(weatherData.daily[0].wind_speed * 2.2); // multiply per 2.2 to convert from m/s to mp/h
        }
    }

    return (

        <div className={style.weatherStats}>

            {/* <p>{forecast}</p> */}

            <div className={style.stat}>
                <div>
                    {/* <img src="" alt="" /> */}
                    <p>High / Low</p>
                </div>

                <p>{temps.max}° <span className={style.minTemp}>{temps.min}°</span></p>
            </div>

            <div>
                <div>
                    {/* <img src="" alt="" /> */}
                    <p>Wind <span>{unit === "metric" ? "km/h" : "mp/h"}</span></p>
                </div>

                <p>{wind}</p>
            </div>

            <div>
                <div>
                    {/* <img src="" alt="" /> */}
                    <p>Rain <span>mm</span></p>
                </div>

                <p>{rain}</p>
            </div>
        </div>
    )
}

export default Weatherstats;