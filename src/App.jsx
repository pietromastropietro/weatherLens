// React import
import { createContext, useEffect, useState } from 'react';

// Utils import
import { defaultData } from './default.js'
import axios from 'axios';

// Components import
import MainContent from './layout/mainContent/MainContent'
import Sidebar from './layout/sidebar/Sidebar';
import LoadingSpinner from 'components/loadingSpinner/LoadingSpinner';
import ErrorDialog from 'components/errorDialog/ErrorDialog';
import Overlay from 'components/overlay/Overlay.jsx';

// Style import
import style from './App.module.scss'

// Context export
export const Context = createContext();

const App = () => {
	const [weatherData, setWeatherData] = useState(defaultData.weather);
	const [location, setLocation] = useState(defaultData.location);
	const [unit, setUnit] = useState('metric');
	const [theme, setTheme] = useState('dark');
	const [overlay, setOverlay] = useState(true);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const contextValues = { weatherData, unit, setUnit, location, setLocation, theme, setTheme, loading, setLoading, overlay, setOverlay };

	useEffect(() => {
		// Get weather data from city latitude and longitude
		const fetchData = async (lat, lon) => {
			setOverlay(true);
			setLoading(true);
			try {
				const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=${unit}&appid=${process.env.REACT_APP_API_KEY}`)
				setWeatherData(response.data);
				setOverlay(false);
			} catch (err) {
				setError(true);
			} finally {
				setLoading(false);
			};
		};
		fetchData(location.lat, location.lon);
	}, [unit, location]); // whenever unit or location changes, fetch the appropriate data

	return (
		<div className={style.body} data-theme={theme}>
			<Context.Provider value={contextValues}>
				<main className={style.mainContainer}>
					{overlay && <Overlay />}
					{loading && <LoadingSpinner />}

					{error &&
						<ErrorDialog
							title="Weather data not available"
							text="You can try the app, but data aren't updated."
							buttonText="Try the app"
							setError={setError}
						/>
					}

					<Sidebar />
					<MainContent />
				</main>
			</Context.Provider>
		</div>
	);
}

export default App;
