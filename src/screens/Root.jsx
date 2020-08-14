import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "../services/auth";
import PrivateRoute from "../components/PrivateRouteComponent";

//screens
import LoginScreen from "../screens/Login";
import HomeScreen from "../screens/Home";

const RootScreen = () => {
  return(
    <AuthProvider>
      <Router>
        <div>
          <Route exact path='/login' component={LoginScreen} />
          <PrivateRoute exact path='/' component={HomeScreen} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default RootScreen;