import style from './Stat.module.scss';

const Stat = ({ label, unit, data }) => {
    return (
        <div className={style.stat}>

            <div className={style.labels}>
                <p>{label}</p>
                <p className={style.unitLabel}>{unit}</p>
            </div>

            <p>{data}</p>
        </div>
    )
}

export default Stat;