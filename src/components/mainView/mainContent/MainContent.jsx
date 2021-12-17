import style from './MainContent.module.scss'
import HourlySection from './hourlySection/HourlySection';
import WeekSection from './weekSection/WeekSection';
import UnitsSwitch from 'components/unitsSwitch/UnitsSwitch';
import AboutSection from '../sidebar/aboutSection/AboutSection';

const MainContent = () => {
    return (
        <>
            <div className={style.mainContent}>

                <div className={style.header}>
                    <UnitsSwitch />

                    {/* placeholder for dark theme changer */}
                </div>

                <WeekSection />
                <HourlySection />

                <div className={style.hideOnDesktop}>
                    <AboutSection />
                </div>
            </div>
        </>
    );
}

export default MainContent;