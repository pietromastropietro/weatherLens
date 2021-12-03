import style from './MainContent.module.scss'
import TodaySection from './todaySection/TodaySection';
import WeekSection from './weekSection/WeekSection';

const MainContent = ({ weatherData }) => {
    return (
        <div className={style.mainContent}>

            <div id="header">
                {/* <div id="about">
                    <div id="aboutBtn">
                        <img src="" alt="" />
                    </div>
                    <div id="aboutSlider"></div>
                    <div id="aboutContent">
                        <div id="github">Follow me on GitHub
                            <a href="https://github.com/pietromastropietro" target="_blank">
                                <img src="" alt="github-logo" id="githubLogo" />
                            </a>
                        </div>
                        <div id="iconAttribution">
                            <div>Weather icons by <a href="https://www.flaticon.com/authors/freepik"
                                target="_blank">Freepik</a>,
                                Info icon by <a href="https://www.flaticon.com/authors/chanut"
                                    target="_blank">Chanuk</a>,
                                search icon by <a href="https://www.flaticon.com/authors/pixel-perfect"
                                    target="_blank">Pixel
                                    perfect</a>.
                                All provided by <a href="https://www.flaticon.com/" target="_blank">Flaticon.</a> </div>
                        </div>
                    </div>
                </div>

                <div className="tempUnitSlider" id="desktop">
                    <div className="units">
                        <div>°C</div>
                        <div>°F</div>
                    </div>
                    <div className="slider">°C</div>
                </div> */}
            </div>

            <WeekSection dailyWeatherData={weatherData.daily} />

            <TodaySection hourlyWeatherData={weatherData.hourly} />
        </div>
    );
}

export default MainContent;