import React from 'react';
import { Grid, Paper, Typography, Button} from "@material-ui/core";
import { AuthContext } from "../services/auth";
import firebase from '../services/firebase'


const HomeScreen = (props) => {

  const { currentUser } = React.useContext(AuthContext);

  return(
    <Grid container component={Paper} alignContent='center' spacing={2}>
      <Grid item xs={6}>
        <Typography component='h1' variant='h4' >{`Ingreso: ${currentUser.displayName}`}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Button
          variant='contained'
          onClick={() => firebase.auth().signOut()}
        >
          Salir
        </Button>
      </Grid>
    </Grid>
  );
}

export default HomeScreen;