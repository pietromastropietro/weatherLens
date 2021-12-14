import { useEffect, useState } from 'react';
import style from './AboutSection.module.scss'
import githubLogo from 'static/images/github.png'
import linkedin from 'static/images/linkedin.svg'

const AboutSection = () => {
    const [show, setshow] = useState(false);

    const toggle = () => {
        // if (show) {
        //     setshow(false)
        // } else {
        //     setshow(true)
        // }
        setshow(!show)
    }


    return (
        <>
            <div className={style.aboutLink} onClick={toggle}>About WeatherApp</div>
            {show &&
                <div className={style.aboutOverlay}>

                    <div className={style.about}>

                        <div className={style.icons}>
                            <a href="https://github.com/pietromastropietro" target="_blank">
                                <img src={githubLogo} alt="github-logo" />
                            </a>
                            <a href="https://github.com/pietromastropietro" target="_blank">
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
                                <a href="https://www.flaticon.com/authors/freepik" target="_blank"> Freepik</a>,
                                from
                                <a href="https://www.flaticon.com/" target="_blank"> Flaticon.</a>
                            </p>
                            <p>Copyright &copy; 2021.</p>
                        </div>

                        <button onClick={toggle}>Close</button>
                    </div>
                </div>
            }
        </>
    )
}

export default AboutSection;