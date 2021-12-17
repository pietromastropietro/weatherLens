import style from './WeatherStats.module.scss';
import { Context } from 'App';
import { useContext } from 'react';

const Weatherstats = () => {
    const { weatherData } = useContext(Context);

    const temps = {
        min: Math.round(weatherData.daily[0].temp.min),
        max: Math.round(weatherData.daily[0].temp.max)
    }

    const forecast = weatherData.daily[0].weather[0].description;
    const wind = Math.round(weatherData.daily[0].wind_speed * 3.6) || '-'; // multiply per 3.6 to convert from m/s to km/h
    const rain = weatherData.daily[0].rain?.toFixed(1) || '-';

    return (

        <div className={style.weatherStats}>

            {/* <p>{forecast}</p> */}

            <div>
                {/* <img src="" alt="" /> */}
                <p>High / Low</p>
                <p>{temps.max}° <span className={style.minTemp}>{temps.min}°</span></p>
            </div>

            <div>
                {/* <img src="" alt="" /> */}
                <p>Wind <span>km/h</span></p>
                <p>{wind}</p>
            </div>
            
            <div>
                {/* <img src="" alt="" /> */}
                <p>Rain <span>mm</span></p>
                <p>{rain}</p>
            </div>
        </div>
    )
}

export default Weatherstats;