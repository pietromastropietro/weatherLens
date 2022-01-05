// React import
import { useContext, useState } from 'react';

// Context import
import { Context } from 'App';

// Components import
import HourlyForecast from './hourlyForecast/HourlyForecast';
import WeekForecast from './weekForecast/WeekForecast';
import UnitsSwitch from 'components/unitsSwitch/UnitsSwitch';
import AboutDialog from '../../components/aboutDialog/AboutDialog';
import ThemeSwitch from 'components/themeSwitch/ThemeSwitch';

// Style import
import style from './MainContent.module.scss'

const MainContent = () => {
    const { overlay, setOverlay } = useContext(Context);

    const [aboutDialogVisibility, setAboutDialogVisibility] = useState(false);

    const toggleAboutDialog = () => {
        setAboutDialogVisibility(!aboutDialogVisibility)
        setOverlay(!overlay)
    }

    return (
        <div className={style.mainContent}>
            <div>
                <div className={style.header}>
                    <UnitsSwitch />
                    <ThemeSwitch />
                </div>
                <WeekForecast />
            </div>

            <HourlyForecast />

            <div className={style.aboutBtn} onClick={toggleAboutDialog}>
                About WeatherApp
            </div>

            {aboutDialogVisibility &&
                <AboutDialog toggleAboutDialog={toggleAboutDialog} />
            }
        </div>

    );
}

export default MainContent;