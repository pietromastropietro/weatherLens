import Stat from "./Stat/Stat";
import style from './WeatherStats.module.scss';

const Weatherstats = ({ weatherData }) => {
    return (
        <div className={style.weatherStats}>
            <Stat label="H / L" data="" />
            <Stat label="Wind" unit="m/s" data="44" />
            <Stat label="Rain" unit="mm" data="" />
        </div>
    )
}

export default Weatherstats;