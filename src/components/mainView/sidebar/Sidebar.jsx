import Searchbar from '../../searchbar/Searchbar';
import style from './Sidebar.module.scss';
import CurrentWeather from './currentWeather/CurrentWeather';
import Weatherstats from './weatherStats/WeatherStats';
import AboutSection from './aboutSection/AboutSection';

const Sidebar = ({ weatherData, setLocation }) => {
    return (
        <div className={style.sidebar}>
            <Searchbar setLocation={setLocation} />

            <CurrentWeather currentWeatherData={weatherData.current} />

            <Weatherstats dayWeatherData={weatherData.daily[0]} />

            <AboutSection />

        </div>
    );
}

export default Sidebar;