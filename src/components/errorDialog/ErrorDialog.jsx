// React import
import { useContext } from 'react';

// Static files import
import errorIcon from 'static/images/error.svg'

// Context import
import { Context } from 'App';

// Style import
import style from './ErrorDialog.module.scss'

const ErrorDialog = ({ title, text, buttonText, setError }) => {
	const { setOverlay } = useContext(Context);

	const closeDialog = () => {
		setError(false);
		setOverlay(false);
	}

	return (
		<div className={style.container}>
			<div className={style.dialog}>
				<img src={errorIcon} alt="" />
				<h2>{title}</h2>
				<p>
					If the problem persists please report it <a href="https://github.com/pietromastropietro/weatherLens/issues" target="_blank" rel="noreferrer">here</a>.
					<br />
					{text}
				</p>
				<button onClick={closeDialog}>{buttonText}</button>
			</div>
		</div>
	)
}

export default ErrorDialog;