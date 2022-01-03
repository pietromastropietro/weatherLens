// React import
import { useContext } from 'react';

// Context import
import { Context } from 'App';

// Style import
import style from './UnitsSwitch.module.scss'

const UnitsSwitch = () => {
    const { unit, setUnit } = useContext(Context);

    return (
        <div className={style.switch}>
            <div
                onClick={() => setUnit("metric")}
                className={unit === "metric" ? style.active : undefined}
            >
                <p>°C</p>
            </div>

            <div
                onClick={() => setUnit("imperial")}
                className={unit === "imperial" ? style.active : undefined}
            >
                <p>°F</p>
            </div>
        </div>
    )
}

export default UnitsSwitch;