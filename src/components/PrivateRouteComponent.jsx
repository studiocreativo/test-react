import React, {useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from "../services/auth";

export default function PrivateRoute ({ component: RouteComponent, ...otherProps }){

  const { currentUser } = useContext(AuthContext);

  return (
    <Route
      {...otherProps}
      render={routeProps => !!currentUser ? <RouteComponent {...routeProps} /> : <Redirect to='/login' /> }
    />
  );
}