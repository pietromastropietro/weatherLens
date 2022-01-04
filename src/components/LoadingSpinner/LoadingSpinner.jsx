// Style import
import style from './LoadingSpinner.module.scss'

const LoadingSpinner = () => {
    return (
        <div className={style.container}>
            <div className={style.spinner}>
                <div></div><div></div><div></div><div></div>
            </div>
        </div>
    )
}

export default LoadingSpinner;