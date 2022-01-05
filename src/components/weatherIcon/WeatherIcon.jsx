// Utils import
import useImage from 'services/hooks/useImage';

// Static files import
import imageNotFound from 'static/images/image-not-found.svg';

// Style import
import { icon } from './WeatherIcon.module.scss';

const WeatherIcon = ({ name }) => {
    // Codes to associate icon codes from API to local icon names
    const iconCodes = {
        "01d": "01d", 
        "01n": "01n",
        "02d": "02d",
        "02n": "02n",
        "03d": "03d",
        "03n": "03n",
        "04d": "04",
        "04n": "04",
        "09d": "09d",
        "09n": "09n",
        "10d": "10",
        "10n": "10",
        "11d": "11",
        "11n": "11",
        "13d": "13",
        "13n": "13",
        "50d": "50",
        "50n": "50"
    };
    
    const { image, loading, error } = useImage(iconCodes[name]);

    let src;

    if (loading || error) {
        src = imageNotFound;
    } else {
        src = image;
    }

    return (
        <img
            className={icon}
            src={src}
            alt=""
        />
    );
};

export default WeatherIcon;