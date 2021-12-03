import Stat from "./Stat/Stat";
import style from './WeatherStats.module.scss';

const Weatherstats = ({ dayWeatherData }) => {
    
    const temp = `${Math.round(dayWeatherData.temp.max)}° / ${Math.round(dayWeatherData.temp.min)}°`;
    const wind = Math.round(dayWeatherData.wind_speed * 3.6) || '0';
    const rain = dayWeatherData.rain?.toFixed(1) || '0';

    return (
        <div className={style.weatherStats}>
            <Stat label="H / L" unit="Cel" data={temp} />
            <Stat label="Wind" unit="m/s" data={wind} />
            <Stat label="Rain" unit="mm" data={rain} />
        </div>
    )
}

export default Weatherstats;