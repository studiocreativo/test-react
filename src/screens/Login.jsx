import React from 'react';
import { Redirect, withRouter } from "react-router-dom";
import { Grid, Paper, Button, Typography } from "@material-ui/core";
import firebase from '../services/firebase'
import { AuthContext } from "../services/auth";


const LoginScreen = (props) => {

  let provider = new firebase.auth.OAuthProvider('microsoft.com');
  const { currentUser } = React.useContext(AuthContext);

  const handleSignIn = () => {
    firebase.auth().signInWithPopup(provider)
      .then(result => {
        console.log(result);
      })
      .catch(err => console.log(err))
  }

  if(currentUser){
    return (<Redirect to='/' />)
  }

  return(
    <Grid container style={{width:'40%'}} component={Paper} direction='column' alignItems='center' justify='center' spacing={3}>
      <Grid item xs={12} >
        <Typography component='h1' variant='h4' >Log In</Typography>
      </Grid>
      <Grid item xs={12} >
        <Button
          variant='contained'
          onClick={handleSignIn}
        >
          Ingresar con Microsoft
        </Button>
      </Grid>
    </Grid>
  );
}

export default withRouter(LoginScreen);