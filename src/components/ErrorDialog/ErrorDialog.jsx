// Static files import
import errorIcon from 'static/images/error.svg'

// Style import
import style from './ErrorDialog.module.scss'

const ErrorDialog = ({ setError, setOverlay }) => {
	const closeDialog = () => {
		setError(false);
		setOverlay(false);
	}

	return (
		<div className={style.container}>
			<div className={style.errorDialog}>
				<img src={errorIcon} alt="" />
				<h2>Weather data not available</h2>
				<p>
					If the problem persists please report it
					<a href="https://github.com/pietromastropietro/weather-react" target="_blank" rel="noreferrer"> here</a>.
					<br />
					You can try the app, but data aren't updated.
				</p>
				<button onClick={closeDialog}>Try the app</button>
			</div>
		</div>
	)
}

export default ErrorDialog;