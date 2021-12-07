import Stat from "./Stat/Stat";
import style from './WeatherStats.module.scss';

const Weatherstats = ({ dayWeatherData }) => {

    const temp = `${Math.round(dayWeatherData.temp.max)}° / ${Math.round(dayWeatherData.temp.min)}°`;
    const wind = Math.round(dayWeatherData.wind_speed * 3.6) || '0';
    const rain = dayWeatherData.rain?.toFixed(1) || '0';

    return (
        <div className={style.weatherStats}>
            {/* <Stat label="H / L" unit="Cel" data={temp} />
            <Stat label="Wind" unit="m/s" data={wind} />
            <Stat label="Rain" unit="mm" data={rain} /> */}

            <p>Scattered clouds</p>
            {/* <p>Max/Min - 8° <span>4°</span></p>
            <p>{`Rain - ${rain}`} <span>mm</span> </p>
            <p>{`Wind - ${wind}`} <span>km/h</span></p> */}
            
            <div>
                {/* <img src="" alt="" /> */}
                <p>High / Low</p>
                <p>8° <span className={style.minTemp}>4°</span></p>
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