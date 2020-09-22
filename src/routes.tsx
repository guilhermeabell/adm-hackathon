import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import loginPage from './Pages/private_acess/login/index'
import homePage from './Pages/private_acess/home/index'
import addTeams from './Pages/private_acess/addTeams/index'
import mentorias from './Pages/private_acess/mentoria/index'

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component={loginPage} path="/" exact />
            <Route component={homePage} path="/home" />
            <Route component={addTeams} path="/addteams" />
            <Route component={mentorias} path="/mentorias" />
        </BrowserRouter>
    )
}

export default Routes