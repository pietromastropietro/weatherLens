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
                    <a href="https://github.com/pietromastropietro" target="_blank" rel="noreferrer">
                        <img src={githubLogo} alt="github-logo" />
                    </a>
                    <a href="https://github.com/pietromastropietro" target="_blank" rel="noreferrer">
                        <img src={linkedin} alt="linkedin-logo" />
                    </a>
                </div>

                <div>
                    <h1>WeatherApp</h1>
                    <h3>By Pietro Mastropietro</h3>
                </div>

                <div>
                    <p>
                        Weather icons by <a href="https://www.flaticon.com/authors/freepik" target="_blank" rel="noreferrer" className={style.link}>Freepik</a>,
                        from <a href="https://www.flaticon.com/" target="_blank" rel="noreferrer" className={style.link}>Flaticon.</a>
                    </p>
                    <p>Copyright &copy; 2021.</p>
                </div>

                <button onClick={toggleAboutDialog}>Close</button>
            </div>
        </div>

    )
}

export default AboutDialog;