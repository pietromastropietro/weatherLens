import { spinner } from './LoadingSpinner.module.scss'

const LoadingSpinner = () => {
    return (
        <div className={spinner}>
            <div></div><div></div><div></div><div></div>
        </div>
    )
}

export default LoadingSpinner;