import { createContext, useEffect, useState } from 'react';
import MainContent from './components/mainView/mainContent/MainContent'
import Sidebar from './components/mainView/sidebar/Sidebar';
import { completeData, defaultCity, defaultData } from './default.js'
import style from './App.module.scss'
import axios from 'axios';

export const LoadingContext = createContext();

const App = () => {
	
	const [unit, setUnit] = useState('metric');
	const [loading, setLoading] = useState(false);

	const contextValues = { loading, unit, setUnit}

	const [weatherData, setWeatherData] = useState(completeData);

	const [location, setLocation] = useState(defaultCity);

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
			<LoadingContext.Provider value={contextValues}>

				<Sidebar weatherData={weatherData} setLocation={setLocation} />
				{/* <div className={style.separator}></div> */}
				<MainContent weatherData={weatherData} setUnit={setUnit} />

			</LoadingContext.Provider>
		</main>
	);
}

export default App;
