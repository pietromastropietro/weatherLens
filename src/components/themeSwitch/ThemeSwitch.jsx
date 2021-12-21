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
		<div
			onClick={changeTheme}
			className={`${style.switch} ${theme === "dark" ? style.rotate : undefined}`}
		>
			<div></div>
		</div>
	)
}

export default ThemeSwitch;