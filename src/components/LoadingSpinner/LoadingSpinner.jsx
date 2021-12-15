import style from './LoadingSpinner.module.scss'

const LoadingSpinner = () => {
    return (
        <div className={style["lds-ring"]}>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default LoadingSpinner;