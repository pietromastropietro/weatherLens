// React import
import { useContext, useState } from 'react';

// Context import
import { Context } from 'App';

// Components import
import HourlySection from './hourlySection/HourlySection';
import WeekSection from './weekSection/WeekSection';
import UnitsSwitch from 'components/unitsSwitch/UnitsSwitch';
import AboutDialog from '../../aboutDialog/AboutDialog';
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
                <WeekSection />
            </div>

            <HourlySection />

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