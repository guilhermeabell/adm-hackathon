import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

const mentorias = () => {
    return (
        <div id="pageMentoria">
            <div className="mentorias">
                <div className="mentoria-title">
                    <div className="mentoria-text">
                        <p>Mentor: Felipe</p>
                        <p>Horario: Terça-Feira (22) às 17:00 horas</p>
                    </div>
                </div>
                <div className="mentoria-info">
                    <div className="info">
                        <p>Time 3</p>
                        <p>Integrantes: </p>
                        <p>Pedro Augusto Ribeiro Marques</p>
                        <p>Mariana da Silva Oliveira Rodrigues</p>
                        <p>José Vieira Martins</p>
                        <p>Anastácio Ferreira de Oliveira</p>
                        <p>Fernanda Miranda Lima Guimaraes</p>
                    </div>
                    <div className="contact-title">
                        <p className="contact-title">Contato:</p>
                    </div>
                    <div className="contact">
                        <div className="contact-text">
                            <p>p.augusto.rib@gmail.com</p>
                        </div>
                        <div className="contact-button">
                            <Link to="/contact">
                                <button>Conversar</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default mentorias