// Static files import
import githubLogo from 'static/images/github.png'
import linkedin from 'static/images/linkedin.svg'

// Style import
import style from './AboutDialog.module.scss'

const AboutDialog = ({ toggleAboutDialog }) => {
    return (
        <div className={style.container}>
            <div className={style.dialog}>
                <div className={style.icons}>
                    <a href="https://github.com/pietromastropietro/weatherLens" target="_blank" rel="noreferrer">
                        <img src={githubLogo} alt="github-logo" />
                    </a>
                    <a href="https://www.linkedin.com/in/pietro-mastropietro-8470bb207" target="_blank" rel="noreferrer">
                        <img src={linkedin} alt="linkedin-logo" />
                    </a>
                </div>

                <div>
                    <h1>WeatherLens.</h1>
                    <h3>By Pietro Mastropietro</h3>
                </div>

                <div>
                    <p>
                        Icons by <a href="https://www.flaticon.com/authors/justicon" target="_blank" rel="noreferrer" className={style.link}>Justicon</a>,
                        from <a href="https://www.flaticon.com/" target="_blank" rel="noreferrer" className={style.link}>flaticon.com</a>
                    </p>
                    <p>Copyright &copy; 2021.</p>
                </div>

                <button onClick={toggleAboutDialog}>Close</button>
            </div>
        </div>
    )
}

export default AboutDialog;