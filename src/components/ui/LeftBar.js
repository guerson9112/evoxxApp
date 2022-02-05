import React from 'react';
import {
  useNavigate
} from "react-router-dom";
import { Container, makeStyles, Typography } from '@material-ui/core';
import { Home, ChangeHistory, Category, Assignment } from '@material-ui/icons';
import { Area } from '../administration/area/Area';

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    color: "white",
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ece7e7",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },

  text: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export const LeftBar = () => {

  const navigate = useNavigate();

  const classes = useStyles();

  const onHandleClick = (e) => {
    console.log('lcick');
    navigate('/area');
  }

  return (

    <>

      <Container className={classes.container}>

        <div className={classes.item} >
          <Home className={classes.icon} />
          <Typography className={classes.text}>Inicio</Typography>
        </div>
        <div className={classes.item} onClick={onHandleClick}>
          <ChangeHistory className={classes.icon} />
          <Typography className={classes.text}>Area</Typography>
        </div>
        <div className={classes.item}>
          <Category className={classes.icon} />
          <Typography className={classes.text}>Inicio</Typography>
        </div>
        <div className={classes.item}>
          <Assignment className={classes.icon} />
          <Typography className={classes.text}>Inicio</Typography>
        </div>
      </Container>

      
    </>

  )
}
