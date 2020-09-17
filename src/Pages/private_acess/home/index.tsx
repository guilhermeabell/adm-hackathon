import React from 'react'
import './styles.css'
import icon from './assets/icon.svg'
import addfile from './assets/addfile.svg'
import addteam from './assets/addteam.svg'
import manageprojects from "./assets/manageprojects.svg"
import showmembers from './assets/showmembers.svg'
import { Link } from 'react-router-dom'

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
                        <p className="user-title" >Olá Pedro,</p>
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
            </div>
        </div>
    )
}

export default loginPage