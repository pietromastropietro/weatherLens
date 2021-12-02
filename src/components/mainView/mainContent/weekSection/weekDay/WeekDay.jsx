import style from './WeekDay.module.scss'

const WeekDay = ({ day, icon, temps }) => {
    return (
        <div className={style.day}>
            <p>
                {/* {format(new Date(weatherData.daily[i + 1].dt * 1000), 'EEE')} */}
            </p>

            <figure>
                <img src="" />
            </figure>

            <p>
                {/* {`${Math.round(weatherData.daily[i + 1].temp.max)}° / ${Math.round(weatherData.daily[i + 1].temp.min)}°`} */}
            </p>
        </div>
    )
}

export default WeekDay;