import React from 'react';
import { Container, makeStyles } from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
    container: {
     // paddingTop: theme.spacing(10),
    },
  }));

export const Home = () => {

  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <h1>home works</h1>
    </Container>
  );
};
