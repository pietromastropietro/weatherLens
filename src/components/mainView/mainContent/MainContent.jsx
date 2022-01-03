// Components import
import HourlySection from './hourlySection/HourlySection';
import WeekSection from './weekSection/WeekSection';
import UnitsSwitch from 'components/unitsSwitch/UnitsSwitch';
import AboutSection from '../sidebar/aboutSection/AboutSection';
import ThemeSwitch from 'components/themeSwitch/ThemeSwitch';

// Style import
import style from './MainContent.module.scss'

const MainContent = () => {
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
            
            <div className={style.aboutBtnContainer}>
                <AboutSection />
            </div>
        </div>

    );
}

export default MainContent;