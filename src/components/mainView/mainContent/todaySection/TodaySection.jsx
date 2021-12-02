import style from './TodaySection.module.scss'

const TodaySection = () => {
    return (
        <div className={style.todaySection}>
            <h1>Today</h1>

            <table className={style.hoursTable}>
                <thead>
                    <tr>
                        <th>Time</th>
                        <th></th>
                        <th>Conditions</th>
                        <th>Temp</th>
                        <th>Wind</th>
                        <th>Rain</th>
                    </tr>
                </thead>

                <tbody>
                    <tr className={style.hour}>
                        <td>
                            {/* {format(new Date(weatherData.hourly[i].dt * 1000), 'H:mm')} */}
                        </td>
                        <td>
                            <figure>
                                <img src="" />
                            </figure>
                        </td>
                        <td>
                            {/* {weatherData.hourly[i].weather[0].description} */}
                        </td>
                        <td>
                            {/* {`${Math.round(weatherData.hourly[i].temp)}°`} */}
                        </td>
                        <td>
                            {/* {weatherData.hourly[i].wind_speed ?
                                Math.round(weatherData.hourly[i].wind_speed * 3.6) : '0'
                            } */}
                        </td>
                        <td>km/h</td>
                        <td>
                            {/* {weatherData.hourly[i].rain ?
                                weatherData.hourly[i].rain["1h"].toFixed(1) : '0'
                            } */}
                        </td>
                        <td>mm</td>


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
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TodaySection;