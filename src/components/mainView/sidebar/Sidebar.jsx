import Searchbar from '../../searchbar/Searchbar';
import style from './Sidebar.module.scss';
import CurrentWeather from './currentWeather/CurrentWeather';
import Weatherstats from './weatherStats/WeatherStats';

const Sidebar = ({ weatherData, setCity }) => {
    // console.log("data: ", weatherData);
    return (
        <div className={style.sidebar}>
            <Searchbar setCity={setCity} />

            <CurrentWeather currentWeatherData={weatherData.current} />

            <Weatherstats dayWeatherData={weatherData.daily[0]} />
        </div>
    );
}

export default Sidebar;