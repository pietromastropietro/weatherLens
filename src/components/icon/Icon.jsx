import useImage from 'services/helper/useImage';
import { icon } from './Icon.module.scss';
import imageNotFound from 'static/images/image-not-found.svg';

const Icon = ({ name }) => {
    const { image, error } = useImage(name);

    return (
        <img
            className={icon}
            src={error ? imageNotFound : image}
            alt=""
        />
    );
};

export default Icon;