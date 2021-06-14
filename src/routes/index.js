import React from "react";
import { Switch } from "react-router-dom";

import {_routes} from '../utils'

import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

//? ALL ROUTES USED IN APP ARE DEFINED HERE...
const Routes = () => {
  return (
    <Switch>

      {/* HOME PAGE/SEARCH PAGE ONLY ACCESSABLE BY AUTHENTICATED USER */}
      <PrivateRoute exact path={_routes.HOME} component={HomePage} />

      {/* PUBLIC ROUTES CAN BE ACCESSIBLE BY ANYONE */}
      {/* {restricted} IS USED TO RESTRICT USER IF ALREADY LOGGED IN */}
      <PublicRoute path={_routes.LOGIN} component={LoginPage} restricted />
      <PublicRoute path={_routes.SIGNUP} component={SignupPage} restricted />
      <PublicRoute path={_routes.LOGOUT} component={SignupPage}  />

    </Switch>
  );
};

export default Routes;
