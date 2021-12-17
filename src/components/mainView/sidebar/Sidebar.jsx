import Searchbar from '../../searchbar/Searchbar';
import style from './Sidebar.module.scss';
import CurrentWeather from './currentWeather/CurrentWeather';
import Weatherstats from './weatherStats/WeatherStats';
import AboutSection from './aboutSection/AboutSection';

const Sidebar = () => {
    return (
        <div className={style.sidebar}>
            <Searchbar />

            <div>
                <CurrentWeather />

                <div className={style.hideOnMobile}>
                    <div className={style.separator}></div>

                    <Weatherstats />
                </div>
            </div>

            <div className={style.hideOnMobile}>
                <AboutSection />
            </div>
        </div>
    );
}

export default Sidebar;