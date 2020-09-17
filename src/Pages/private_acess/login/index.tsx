import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

const loginPage = () => {
    return(
        <div id="loginPage">
            <div className="loginPage-content">
                <div className="loginPage-header">
                    <p className="header-title">É bom te ver por aqui!</p>
                </div>
                <div className="formLogin">

                    <form action="">
                        <div className="loginForm-field">
                            <span>Chave de acesso</span>
                            <input type="text" name="acessKey" id="acessKey" placeholder="Digite sua chave de acesso"/>
                        </div>

                        <div className="submitButton">
                            <Link to="/home">
                                <input type="submit" value="Acessar"/>
                            </Link>
                        </div>
                    </form>
                </div>
                <div className="footer-login">
                    <p className="loginPage-footer">Esta área é permitida apenas para colaboradores.</p>
                    <p className="loginPage-footer">Faça login para administrar!</p>
                </div>
            </div>
        </div>
    )
}

export default loginPage