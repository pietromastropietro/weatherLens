import { createContext, useEffect, useState } from 'react';
import MainContent from './components/mainView/mainContent/MainContent'
import Sidebar from './components/mainView/sidebar/Sidebar';
import { defaultData } from './default.js'
import style from './App.module.scss'
import axios from 'axios';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import ErrorDialog from 'components/ErrorDialog/ErrorDialog';

export const Context = createContext();

const App = () => {
	const [unit, setUnit] = useState('metric');
	const [loading, setLoading] = useState(false); // must be true for prod
	const [error, setError] = useState(false);

	const [weatherData, setWeatherData] = useState(defaultData.weather);
	const [location, setLocation] = useState(defaultData.location);

	const [theme, setTheme] = useState("light");

	const contextValues = { weatherData, unit, setUnit, location, setLocation, theme, setTheme, loading };

	useEffect(() => {
		// Gets weather data for the city (by lat & lon) from the openweatherAPI and returns the JSON
		const fetchData = async (lat, lon) => {
			setLoading(true);

			try {
				const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=${unit}&appid=${process.env.REACT_APP_API_KEY}`)
				setWeatherData(response.data);
			} catch (err) {
				console.log(err);
				setError(true);
			} finally {
				setLoading(false)
			};
		};
		// fetchData(location.lat, location.lon);
	}, [unit, location]);

	return (
		<div className={style.body} data-theme={theme}>

			<main className={style.mainContainer}>
				{error && <ErrorDialog setError={setError} />}

				{loading &&
					<div className={style.loadingSpinnerContainer}>
						<LoadingSpinner />
					</div>
				}

				<Context.Provider value={contextValues}>
					<Sidebar />
					<MainContent />
				</Context.Provider>
			</main>
		</div>
	);
}

export default App;
