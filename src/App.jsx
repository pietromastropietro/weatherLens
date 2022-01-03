// React import
import { createContext, useEffect, useState } from 'react';

// Utils import
import { defaultData } from './default.js'
import axios from 'axios';

// Components import
import MainContent from './components/mainView/mainContent/MainContent'
import Sidebar from './components/mainView/sidebar/Sidebar';
import LoadingSpinner from 'components/loadingSpinner/LoadingSpinner';
import ErrorDialog from 'components/errorDialog/ErrorDialog';

// Style import
import style from './App.module.scss'

// Context 
export const Context = createContext();

const App = () => {
	const [weatherData, setWeatherData] = useState(defaultData.weather);
	const [location, setLocation] = useState(defaultData.location);
	const [unit, setUnit] = useState('metric');
	const [theme, setTheme] = useState('dark');
	const [loading, setLoading] = useState(false); // must be true for prod
	const [error, setError] = useState(false);

	const contextValues = { weatherData, unit, setUnit, location, setLocation, theme, setTheme, loading };

	useEffect(() => {
		// Get weather data from city latitude and longitude
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
	}, [unit, location]); // whenere unit or location changes, fetch the appropriate data

	return (
		<div className={style.body} data-theme={theme}>

			<main className={style.mainContainer}>
				{error &&
					<div className={style.overlay}>
						<ErrorDialog setError={setError} />
					</div>
				}

				{loading &&
					<div className={style.overlay}>
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
