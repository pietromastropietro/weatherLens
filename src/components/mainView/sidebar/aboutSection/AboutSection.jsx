import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import style from './AboutSection.module.scss'

const AboutSection = () => {
    const [show, setshow] = useState(true);

    // useEffect(() => {
    //     document.body.style.overflow = 'hidden';
    //     return () => 
    // }, []);

    const toggle = () => {
        if (show) {
            setshow(false)
            document.body.style.overflow = 'unset'
        } else {
            setshow(true)
            document.body.style.overflow = 'hidden';
        }
    }


    return (
        <>

            {!show ? <div onClick={toggle}>apri about</div> :
                <div className={style.about}>
                    <div>
                        <p>About</p>
                        <button onClick={toggle}>chidui</button>
                    </div>
                    {/* <div id="about">


                        <div id="aboutContent">
                        <div id="github">Follow me on GitHub
                        <a href="https://github.com/pietromastropietro" target="_blank">
                        <img src="" alt="github-logo" id="githubLogo" />
                        </a>
                        </div>
                        <div id="iconAttribution">
                        <div>Weather icons by <a href="https://www.flaticon.com/authors/freepik"
                        target="_blank">Freepik</a>,
                        Info icon by <a href="https://www.flaticon.com/authors/chanut"
                        target="_blank">Chanuk</a>,
                        search icon by <a href="https://www.flaticon.com/authors/pixel-perfect"
                        target="_blank">Pixel
                        perfect</a>.
                        All provided by <a href="https://www.flaticon.com/" target="_blank">Flaticon.</a> </div>
                        </div>
                        </div>
                    </div> */}
                </div>
            }
        </>
    )
}

export default AboutSection;