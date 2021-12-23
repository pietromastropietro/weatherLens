import { useState } from 'react';
import style from './AboutSection.module.scss'
import githubLogo from 'static/images/github.png'
import linkedin from 'static/images/linkedin.svg'

const AboutSection = () => {
    const [dialogVisibility, setDialogVisibility] = useState(false);

    const toggleDialog = () => {
        setDialogVisibility(!dialogVisibility)
    }


    return (
        <>
            <div className={style.aboutLink} onClick={toggleDialog}>About WeatherApp</div>
            {dialogVisibility &&
                <div className={style.aboutOverlay}>

                    <div className={style.aboutDialog}>

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
                                Weather icons by
                                <a href="https://www.flaticon.com/authors/freepik" target="_blank" rel="noreferrer"> Freepik</a>,
                                from
                                <a href="https://www.flaticon.com/" target="_blank" rel="noreferrer"> Flaticon.</a>
                            </p>
                            <p>Copyright &copy; 2021.</p>
                        </div>

                        <button onClick={toggleDialog}>Close</button>
                    </div>
                </div>
            }
        </>
    )
}

export default AboutSection;