import React from 'react'
import './styles.css'
import icon from './assets/icon.svg'
import addfile from './assets/addfile.svg'
import addteam from './assets/addteam.svg'
import manageprojects from "./assets/manageprojects.svg"
import showmembers from './assets/showmembers.svg'
import { Link } from 'react-router-dom'
import arrow from './assets/arrow.svg'

var data = new Date();
var hour = data.getHours();

const loginPage = () => {
    return(
        <div className="homeHeader">
            <div className="home-content">
                <div className="home-header">
                    <div className="user-section-img">
                        <img src={icon}></img>
                    </div>
                    <div className="user-section-title">
                        <p className="user-title" >Olá Felipe,</p>
                        <p className="user-title" >tenha {`${(hour <= 12 ? 'um bom dia!' : hour <= 17 ? 'uma boa tarde!' : 'uma boa noite!')}`}</p>
                    </div>
                </div>

                <div className="menu-content">
                    <p>Que tal...</p>
                </div>

                <div className="shortcuts">
                    <div className="shortcuts-content">
                        <div className="itens-menu">
                            <div className="itens-single">
                                <Link to="/addfile"> 
                                    <img src={addfile} alt=""/>
                                    <p>Adicionar material</p>
                                </Link>
                            </div>

                            <div className="itens-single">
                                <Link to="/addfile"> 
                                    <img src={addteam} alt=""/>
                                    <p>Adicionar time</p>
                                </Link>
                            </div>

                            <div className="itens-single">
                                <Link to="/addfile"> 
                                    <img src={showmembers} alt=""/>
                                    <p>Ver participantes</p>
                                </Link>
                            </div>

                            <div className="itens-single">
                                <Link to="/addfile"> 
                                    <img src={manageprojects} alt=""/>
                                    <p>Gerenciar projetos</p>                                        
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu-content">
                    <p>Últimas mentorias</p>
                </div>

                <div className="master">
                    <div className="masterclass">
                        <div className="masterclass-content">
                            <div className="masterclass-item">
                                <div className="masterclass-item-single">
                                    <div className="masterclass-text">
                                        <p>Mentor: Pedro</p>
                                        <p>Horario: Sexta-Feira (18) às 19:00 horas</p>
                                    </div>
                                    <div className="arrow">
                                        <Link to="/mentorias">
                                            <img src={arrow} alt=""/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>

                    <div className="masterclass">
                        <div className="masterclass-content">
                            <div className="masterclass-item">
                                <div className="masterclass-item-single">
                                    <div className="masterclass-text">
                                        <p>Mentor: Igor</p>
                                        <p>Horario: Segunda-Feira (21) às 15:00 horas</p>
                                    </div>
                                    <div className="arrow">
                                        <Link to="/mentorias">
                                            <img src={arrow} alt=""/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>

                    <div className="masterclass">
                        <div className="masterclass-content">
                            <div className="masterclass-item">
                                <div className="masterclass-item-single">
                                    <div className="masterclass-text">
                                        <p>Mentor: Felipe</p>
                                        <p>Horario: Terça-Feira (22) às 17:00 horas</p>
                                    </div>
                                    <div className="arrow">
                                        <Link to="/mentorias">
                                            <img src={arrow} alt=""/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>

            </div>
        </div>
    )
}

export default loginPage