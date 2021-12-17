import style from './ErrorDialog.module.scss'

const ErrorDialog = ({ setError }) => {
    return (
        <div className={style.errorOverlay}>
					<div className={style.errorDialog}>

						<div className={style.icon}>!</div>

						<h2>Something went wrong</h2>

						<p>
							Weather data not available,
							if the problem persists please report it
							<a href=""> here</a>.<br /><br />
							You can try the app, but the data aren't updated.
						</p>

						<button onClick={() => setError(false)}>Try the app</button>
					</div>
				</div>
    )
}

export default ErrorDialog;