import zyro from'../../assets/illustrations/zyro-image_1.png';
import './Intro.scss'

import React from 'react'

function Intro() {
    return (
        <div id="intro" className='Intro d-flex justify-content-center'>
            <div className='SubIntro container'>
                <div className='Description'>
                    <h3 className='title'>Hola, Soy Drexler, <span className='back'>Desarrollador web</span></h3>
                    <span className='text'>Joven emprendedor con ganas de trabajar y aprender</span>
                    <button className='btn'>¿HABLAMOS?</button>
                </div>
                <img src={zyro} alt="zyro"/>
            </div>
        </div>
    )
}

export default Intro
