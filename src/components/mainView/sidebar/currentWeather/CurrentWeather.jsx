import { format } from 'date-fns';
import useImage from 'services/helper/useImage';
import style from './CurrentWeather.module.scss';
import { LoadingContext } from 'App';
import { useContext } from 'react';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';

const CurrentWeather = ({ currentWeatherData }) => {
    const loadingStatus = useContext(LoadingContext);

    const { image: icon, loading, error } = useImage(currentWeatherData.weather[0].icon);

    // const date = format(new Date(currentWeatherData.dt * 1000), 'EEEE, H:mm');
    const day = format(new Date(currentWeatherData.dt * 1000), 'EEEE');
    const time = format(new Date(currentWeatherData.dt * 1000), 'H:mm');
    const temp = Math.round(currentWeatherData.temp);
    const forecast = currentWeatherData.weather[0].description;

    return (
        <div className={style.currentWeather}>
            {loadingStatus.loading ? <LoadingSpinner /> :
                <>
                    <h1 className={style.cityName}>Milan, <span>IT</span></h1>

                    {/* <p className={style.date}>{date}</p> */}

                    <figure>
                        <img src={icon} alt="weather conditions" />
                    </figure>

                    <div className={style.temp}>
                        {/* <h1 >${temp}</h1> */}
                        <h1>12</h1>
                        <p>°C</p>
                    </div>

                    <p className={style.date}>{`${day}, `} <span>{time}</span></p>


                    {/* <p className={style.forecast}>
                            {forecast}
                        </p> */}
                </>
            }
        </div>
    );
};

export default CurrentWeather;