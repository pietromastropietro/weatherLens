import Searchbar from '../../searchbar/Searchbar';
import style from './Sidebar.module.scss';
import CurrentWeather from './currentWeather/CurrentWeather';
import Weatherstats from './weatherStats/WeatherStats';

const Sidebar = ({ weatherData }) => {
    console.log("data: ", weatherData);
    return (
        <div className={style.sidebar}>
            <Searchbar />

            <CurrentWeather weatherData={weatherData} />

            <Weatherstats weatherData={weatherData} />
        </div>
    );
}

export default Sidebar;