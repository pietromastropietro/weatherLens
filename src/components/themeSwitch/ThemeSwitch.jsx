import style from './ThemeSwitch.module.scss';
import { Context } from 'App';
import { useContext } from 'react';

const ThemeSwitch = () => {
    const { theme, setTheme } = useContext(Context);

    const changeTheme = () => {
		if (theme === "light") {
			setTheme("dark")
		} else {
			setTheme("light")
		}
	}
    return (
        <button onClick={changeTheme} className={style.switch}>X</button>
    )
}

export default ThemeSwitch;