// React import
import { useContext, useState } from 'react';

// Context import
import { Context } from 'App';

// Components import
import Searchbar from '../../components/searchbar/Searchbar';
import CurrentWeather from './currentWeather/CurrentWeather';
import TodayAverages from './todayAverages/TodayAverages';
import AboutDialog from '../../components/aboutDialog/AboutDialog';
import ThemeSwitch from 'components/themeSwitch/ThemeSwitch';

// Style import
import style from './Sidebar.module.scss';

const Sidebar = () => {
    const { overlay, setOverlay } = useContext(Context);

    const [aboutDialogVisibility, setAboutDialogVisibility] = useState(false);

    const toggleAboutDialog = () => {
        setAboutDialogVisibility(!aboutDialogVisibility)
        setOverlay(!overlay)
    }

    return (
        <div className={style.sidebar}>
            <div className={style.searchbarAndThemeSwitchContainer}>
                <Searchbar />

                <div className={style.themeSwitchContainer}>
                    <ThemeSwitch />
                </div>
            </div>

            <div>
                <CurrentWeather />
                <div className={style.separator}></div>
                <TodayAverages />
            </div>

            <div className={style.aboutBtn} onClick={toggleAboutDialog}>
                About WeatherApp
            </div>

            {aboutDialogVisibility &&
                <AboutDialog toggleAboutDialog={toggleAboutDialog} />
            }
        </div>
    );
}

export default Sidebar;