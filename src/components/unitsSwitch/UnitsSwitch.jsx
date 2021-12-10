import { useState } from 'react/cjs/react.development'
import style from './UnitsSwitch.module.scss'
import { LoadingContext } from 'App';
import { useContext } from 'react';

const UnitsSwitch = () => {
    const { unit, setUnit } = useContext(LoadingContext);

    return (
        <div className={style.switch}>
            <div
                onClick={() => setUnit("metric")}
                className={unit === "metric" && style.active}
            >
                <p>°C</p>
            </div>

            <div
                onClick={() => setUnit("imperial")}
                className={unit === "imperial" && style.active}
            >
                <p>°F</p>
            </div>
        </div>
    )
}

export default UnitsSwitch;