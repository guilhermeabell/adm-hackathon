import React from 'react'
import './styles.css'
import icon from './assets/icon.svg'

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
            </div>
        </div>
    )
}

export default loginPage