import React from 'react';

import logoImg from '../../assets/myasklogo.svg'
import landingImg from '../../assets/landing.svg'
import studyIcon from '../../assets/icons/study.svg'
import giveClassesIcon from '../../assets/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/icons/purple-heart.svg'

import './styles.css'
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="MyAsk" />
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img src={landingImg} alt="Plataforma de estudos" className="hero-image"/>

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar Aulas"/>
                        Dar Aulas
                    </Link>
                </div>

                <span className="total-connections">
                        Total de 200 conecxões já realizadas <img src={purpleHeartIcon} alt="Coração roxo" />
                    </span>
            </div>
        </div>
    )
}

export default Landing;