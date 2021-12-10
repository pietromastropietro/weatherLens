import style from './HourlyElement.module.scss'
import { format } from 'date-fns';
import useImage from 'services/helper/useImage';

const HourlyElement = ({ hourlyData }) => {
    const { image: icon, loading, error } = useImage(hourlyData.weather[0].icon);

    const temp = Math.round(hourlyData.temp);
    const hour = format(new Date(hourlyData.dt * 1000), 'H:mm')
    const forecast = hourlyData.weather[0].description;
    const wind = Math.round(hourlyData.wind_speed * 3.6) || '0';
    const rain = hourlyData.rain?.["1h"].toFixed(1) || '0';

    return (
        <li className={style.hour}>
            <p>{hour}</p>

            <p>
                <figure>
                    <img src={icon} alt="weather conditions" />
                </figure>
            </p>

            <p>{forecast}</p>

            <p>{`${temp}°`}</p>

            <p>{wind} <span>km/h</span></p>

            <p>{rain} <span>mm</span></p>


            {/* <div class="hourTile">
                            <div class="time">14:00</div>
                            <div class="hourIcon">
                                <img src="./images/10d.svg" />
                            </div>
                            <div class="hourForecast">moderate rain</div>
                            <div class="hourTemp">13°</div>
                            <div class="hourWind">33</div>
                            <div class="windUnitLabel">km/h</div>
                            <div class="hourRain">1.1</div>
                            <div class="rainUnitLabel">mm</div>
                        </div> */}
        </li>
    );
}

export default HourlyElement;