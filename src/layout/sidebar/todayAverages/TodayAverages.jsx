// React import
import { useContext } from 'react';

// Context import
import { Context } from 'App';

// Static files import
import tempsIcon from 'static/images/temps.png'
import rainIcon from 'static/images/rain.png'
import windIcon from 'static/images/wind.png'

// Components import
import WeatherIcon from 'components/weatherIcon/WeatherIcon';

// Style import
import style from './TodayAverages.module.scss';

const TodayAverages = () => {
    const { unit, weatherData } = useContext(Context);

    const temps = {
        min: Math.round(weatherData.daily[0].temp.min),
        max: Math.round(weatherData.daily[0].temp.max)
    }

    const forecast = weatherData.daily[0].weather[0].description;
    const icon = weatherData.daily[0].weather[0].icon;
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
        <div className={style.todayHighlights}>

            <div className={style.average}>
                <div>
                    <WeatherIcon name={icon} />
                    <p className={style.forecast}>{forecast}</p>
                </div>
            </div>

            <div className={style.average}>
                <div>
                    <img src={tempsIcon} alt="" />
                    <p>High / Low</p>
                </div>

                <p>{temps.max}° <span className={style.minTemp}>{temps.min}°</span></p>
            </div>

            <div className={style.average}>
                <div>
                    <img src={windIcon} alt="" />
                    <p>Wind <span>{unit === "metric" ? "km/h" : "mp/h"}</span></p>
                </div>

                <p>{wind}</p>
            </div>

            <div className={style.average}>
                <div>
                    <img src={rainIcon} alt="" />
                    <p>Rain <span>mm</span></p>
                </div>

                <p>{rain}</p>
            </div>
        </div>
    )
}

export default TodayAverages;