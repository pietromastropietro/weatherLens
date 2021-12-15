import Stat from "./Stat/Stat";
import style from './WeatherStats.module.scss';

const Weatherstats = ({ dayWeatherData }) => {
    console.log("weahterdata: " + JSON.stringify(dayWeatherData, null, 2));

    const temps = {
        min: Math.round(dayWeatherData.temp.min),
        max: Math.round(dayWeatherData.temp.max)
    }
    const forecast = dayWeatherData.weather[0].description;
    const wind = Math.round(dayWeatherData.wind_speed * 3.6) || '-'; // multiply per 3.6 to convert from m/s to km/h
    const rain = dayWeatherData.rain?.toFixed(1) || '-';

    return (

        <div className={style.weatherStats}>
            {/* <Stat label="H / L" unit="Cel" data={temp} />
                <Stat label="Wind" unit="m/s" data={wind} />
                <Stat label="Rain" unit="mm" data={rain} /> */}

            {/* <p>Max/Min - 8° <span>4°</span></p>
                <p>{`Rain - ${rain}`} <span>mm</span> </p>
            <p>{`Wind - ${wind}`} <span>km/h</span></p> */}

            <p>{forecast}</p>

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