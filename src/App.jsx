import { createContext, useEffect, useState } from 'react';
import MainContent from './components/mainView/mainContent/MainContent'
import Sidebar from './components/mainView/sidebar/Sidebar';
import { completeData, defaultCity, defaultData } from './default.js'
import style from './App.module.scss'
import axios from 'axios';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';

export const LoadingContext = createContext();

const App = () => {
	const [unit, setUnit] = useState('metric');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	
	const [weatherData, setWeatherData] = useState(completeData);	
	const [location, setLocation] = useState(defaultCity);

	const contextValues = { loading, unit, setUnit, location, setLocation }

	useEffect(() => {
		console.log("effect");
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
	}, [])

	return (
		<main>
			{error &&
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
			}

			{loading ?
				<div className={style.loading}>
					<LoadingSpinner />
				</div>
				:
				<LoadingContext.Provider value={contextValues}>
					<Sidebar weatherData={weatherData} />
					<MainContent weatherData={weatherData} />
				</LoadingContext.Provider>
			}
		</main>
	);
}

export default App;
