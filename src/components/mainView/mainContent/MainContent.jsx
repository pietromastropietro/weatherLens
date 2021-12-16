import style from './MainContent.module.scss'
import TodaySection from './hourlySection/HourlySection';
import WeekSection from './weekSection/WeekSection';
import UnitsSwitch from 'components/unitsSwitch/UnitsSwitch';
import AboutSection from '../sidebar/aboutSection/AboutSection';

const MainContent = ({ weatherData }) => {
    return (
        <>
            <div className={style.mainContent}>

                <div className={style.header}>
                    <UnitsSwitch />

                    {/* placeholder for dark theme changer */}
                </div>

                <WeekSection dailyWeatherData={weatherData.daily} />

                <TodaySection hourlyWeatherData={weatherData.hourly} />

            <div className={style.hideOnDesktop}>
                <AboutSection />
            </div>
            </div>
        </>
    );
}

export default MainContent;