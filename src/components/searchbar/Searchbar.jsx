import style from './Searchbar.module.scss';
import icon from 'static/images/search.svg'
import { useContext, useState } from 'react';
import axios from 'axios';
import { LoadingContext } from 'App';

const Searchbar = () => {
    const { setLocation } = useContext(LoadingContext);

    const [city, setCity] = useState("");
    const [citiesResults, setCitiesResults] = useState([]);

    const handleInput = (e) => {
        setCity(e.target.value);
    }
    
    const handleEnterKey = (e) => {
        // TODO: add regex for input validation

        if (e.key === "Enter" && /* temp, will use regex */ city !== "") {
            fetchData(city);
        }
    }

    const changeWeatherData = () => {
        // setLocation(city)
    }

    // fetch cities from the openweather api (limited to 4 results)
    const fetchData = async (city) => {
        try {
            // const response = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=4&appid=f1da688d16302a59f515543adff493fe`);

            // temp, for testing
            const response = {
                data: [
                    {
                        name: "test",
                        country: "test2"
                    }
                ]
            }

            // console.log("response: " + JSON.stringify(response, null, 2));

            if (response.data.length === 0) {
                alert("No city found, please try again.");
            } else {
                setCitiesResults(response.data);
            }
        } catch (err) {
            alert('Error, try again. If the error persists, please contact the owner (GitHub link in the "info" section).');
        };
    }

    return (
        <div className={style.searchContainer}>

            <div className={style.searchbar}>
                <img src={icon} alt="search-icon" />
                <input type="text" value={city} onChange={handleInput} onKeyDown={handleEnterKey} placeholder="Search for a city" autoComplete='off' />
            </div>

            <ul className={`${style.results} ${citiesResults.length !== 0 && style.expand}`}>
                {citiesResults.map(city =>
                    <li onClick={changeWeatherData}>
                        {city.state ?
                            `${city.name}, ${city.state}` :
                            `${city.name}, ${city.country}`
                        }
                    </li>
                )}
            </ul>
        </div>
    )
};

export default Searchbar;