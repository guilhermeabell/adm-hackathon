import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

const addTeams = () => {
    return(
        <div id="addPage">
            <div className="addPage-content">
                <div className="addPage-header">
                    <p className="header-title">Adicionar um novo time!</p>
                </div>
                <div className="formAdd">

                    <form action="">
                        <div className="addForm-field">
                            <span>Nome do time</span>
                            <input type="text" name="acessKey" id="acessKey" placeholder="Digite o nome do time"/>
                        </div>

                        <div className="submitButton">
                            <Link to="/home">
                                <input type="submit" value="Acessar"/>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default addTeams