import style from './ErrorDialog.module.scss'

const ErrorDialog = ({ setError }) => {
    return (
        <div className={style.errorOverlay}>
					<div className={style.errorDialog}>

						<div className={style.icon}>!</div>

						<h2>Weather data not available</h2>

						<p>
							If the problem persists please report it
							<a href="https://github.com/pietromastropietro/weather-react" target="_blank" rel="noreferrer"> here</a>.
							<br />
							You can try the app, but data aren't updated.
						</p>
						<button onClick={() => setError(false)}>Try the app</button>
					</div>
				</div>
    )
}

export default ErrorDialog;