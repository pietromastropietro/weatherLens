import { createContext, useEffect, useState } from 'react';
import MainContent from './components/mainView/mainContent/MainContent'
import Sidebar from './components/mainView/sidebar/Sidebar';
import { defaultData, defaultCity } from './default.js'
import style from './App.module.scss'
import axios from 'axios';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import ErrorDialog from 'components/ErrorDialog/ErrorDialog';

export const Context = createContext();

const App = () => {
	const [unit, setUnit] = useState('metric');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const [weatherData, setWeatherData] = useState(defaultData);
	const [location, setLocation] = useState(defaultCity);

	const [theme, setTheme] = useState("light");

	const contextValues = { weatherData, loading, unit, setUnit, location, setLocation, theme, setTheme }

	useEffect(() => {
		// Gets weather data for the city (by lat & lon) from the openweatherAPI and returns the JSON

		const fetchData = async (lat, lon) => {
			// const fetchData = async () => {
			// toggleModal();
			try {
				// const response = [];
				const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=${unit}&appid=`)
				console.log("fetch");
				console.log("response: " + JSON.stringify(response, null, 2));

				// toggleModal();
				setWeatherData(response.data);

				setLoading(false);
			} catch (err) {
				// alert('Error, try again. If the error persists, please contact the owner (GitHub link in the "info" section).');
				console.log('Error, try again. If the error persists, please contact the owner (GitHub link in the "info" section).');
			};
			// toggleModal();
		};

		// fetchData(location.lat, location.lon);
	}, [unit, location]) // so when unit or location changes it fecthes the data automatically, no need to do anything

	return (
		<div className={style.body} data-theme={theme}>

			<main className={style.mainContainer}>
				{error && <ErrorDialog setError={setError} />}

				{loading ?
					<div className={style.loadingSpinnerContainer}>
						<LoadingSpinner />
					</div>
					:
					<Context.Provider value={contextValues}>
						<Sidebar />
						<MainContent />
					</Context.Provider>
				}
			</main>
		</div>
	);
}

export default App;
