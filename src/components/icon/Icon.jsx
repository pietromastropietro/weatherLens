// Utils import
import useImage from 'services/helper/useImage';

// Static files import
import imageNotFound from 'static/images/image-not-found.svg';

// Style import
import { icon } from './Icon.module.scss';

const Icon = ({ name }) => {

    // codes to associate icon code from API to local icon names
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
    }
    
    const { image, error } = useImage(iconCodes[name]);

    return (
        <img
            className={icon}
            src={error ? imageNotFound : image}
            alt=""
        />
    );
};

export default Icon;