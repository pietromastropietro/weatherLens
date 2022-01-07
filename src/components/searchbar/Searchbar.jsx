// React import
import { useContext, useState } from 'react';

// Utils import
import axios from 'axios';

// Static files import
import icon from 'static/images/loc.png'

// Components import
import ErrorDialog from 'components/errorDialog/ErrorDialog';

// Context import
import { Context } from 'App';

// Style import
import style from './Searchbar.module.scss';

const Searchbar = () => {
    const { setLocation, setOverlay, setLoading } = useContext(Context);

    const [city, setCity] = useState("");
    const [citiesResults, setCitiesResults] = useState([]);
    const [error, setError] = useState(false);

    const handleInput = (e) => {
        setCity(e.target.value);
    }

    const handleEnterKey = (e) => {
        if (e.key === "Enter" && city !== "") {
            fetchData(city);
        }
    }

    const changeWeatherData = (index) => {
        setLocation(citiesResults[index]);

        // reset input field and results
        setCity("")
        setCitiesResults([])
    }

    // fetch cities from the openweather api (limited to 4 results)
    const fetchData = async (city) => {
        setOverlay(true);
        setLoading(true);
        try {
            const response = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=4&appid=${process.env.REACT_APP_API_KEY}`);

            if (response.data.length === 0) {
                alert("City not found, please try again.");
            } else {
                setCitiesResults(response.data);
            }
            setOverlay(false);
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        };
    }

    return (
        <>
            {error &&
                <ErrorDialog
                    title="Something went wrong"
                    buttonText="Close"
                    setError={setError}
                />
            }
            <div className={`${style.searchContainer} ${citiesResults.length !== 0 && style.expand}`}>
                <div className={style.searchbar}>
                    <img src={icon} alt="" />
                    <input
                        type="text"
                        value={city}
                        onChange={handleInput}
                        onKeyDown={handleEnterKey}
                        placeholder="Search for a city"
                        autoComplete='off'
                        spellCheck='false'
                    />
                </div>

                <ul className={`${style.results} ${citiesResults.length !== 0 && style.expand}`}>
                    {citiesResults.map((city, index) =>
                        <li
                            onClick={() => changeWeatherData(index)}
                            key={index}
                        >
                            <img src={icon} alt="" />
                            <div>
                                <p>{city.name}</p>
                                <p>{
                                    city.state ?
                                        `${city.state}, ${city.country}` :
                                        city.country
                                }</p>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </>
    )
};

export default Searchbar;