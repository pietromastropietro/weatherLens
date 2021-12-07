import { useEffect, useState } from 'react';
import MainContent from './components/mainView/mainContent/MainContent'
import Sidebar from './components/mainView/sidebar/Sidebar';
import { defaultCity, defaultData } from './default.js'
import style from './App.module.scss'

const App = () => {
	const [weatherData, setWeatherData] = useState({
		// metric: [],
		metric: defaultData,
		imperial: []
	});

	const [city, setCity] = useState("");

	useEffect(() => {
		// Gets weather data for the city (by lat & lon) from the openweatherAPI and returns the JSON
		const fetchData = async (lat, lon, unit) => {
			// toggleModal();
			try {
				const response = [];
				// const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${unit}&appid=${API_KEY}`, { mode: 'cors' });

				// toggleModal();
				setWeatherData({
					...weatherData,
					metric: response.data
				});
			} catch (err) {
				alert('Error, try again. If the error persists, please contact the owner (GitHub link in the "info" section).');
			};
			// toggleModal();
		};
	}, [])

	return (
		<main>
			<Sidebar weatherData={weatherData.metric} setCity={setCity} />
			{/* <div className={style.separator}></div> */}
			<MainContent weatherData={weatherData.metric} />
		</main>
	);
}

export default App;
