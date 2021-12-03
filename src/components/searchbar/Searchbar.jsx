import style from './Searchbar.module.scss';
import icon from 'static/images/search.svg'
import { useState } from 'react/cjs/react.development';

const Searchbar = ({ setCityy }) => {
    const [city, setCity] = useState("");
    const [results, setResults] = useState([]);
    const [resultsVisibility, setResultsVisibility] = useState(false);

    const handleInput = (e) => {
        setCity(e.target.value);
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            setResultsVisibility(true)
        }
    }

    const changeWeatherData = () => {
        // setCityy(new city)

        // close results tab
        setResultsVisibility(false)
    }

    // Searches the city in the openweather database and returns a group of results
    const fetchData = async (city) => {
        // toggleModal();
        try {
            // const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=4&appid=${API_KEY}`, { mode: 'cors' });

            // toggleModal();
            // return citiesResults;
        } catch (err) {
            alert('Error, try again. If the error persists, please contact the owner (GitHub link in the "info" section).');
        };
        // toggleModal();
    }


    return (
        <div className={style.searchContainer}>

            <div className={style.searchbar}>
                <img src={icon} alt="search-icon" />
                <input type="text" value={city} onChange={handleInput} onKeyDown={handleKeyDown} placeholder="Search for a city" autocomplete='off' />
            </div>

            {resultsVisibility &&
            <div className={style.results}>
                <p onClick={changeWeatherData}>city 1</p>
                <p>city 2</p>
                <p>city 3</p>
            </div>}

            {/* <div id="results"></div> */}
        </div>
    )
};

export default Searchbar;