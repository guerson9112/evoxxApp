import React from 'react'
import { Grid } from '@material-ui/core';
import {
    Routes,
    Route,
    Outlet,
} from "react-router";
import { LeftBar } from '../ui/LeftBar'
import { NavBar } from '../ui/NavBar'
import { Container, makeStyles } from "@material-ui/core";
import { Area } from './pages/Area';
import { Home } from './pages/Home';;
const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
    },
}));

export const AdminScreen = () => {
    const classes = useStyles();
    return (

        <div>
            <NavBar />
            <Grid container >
                <Grid item sm={2}>
                    <LeftBar />
                </Grid>
                <Grid item sm={10}>
                    <Container className={classes.container}>
                        {/* <Routes>
                            <Route path="/" element={<Home/>} />
                            <Route path="admin/area" element={<Area />} />
                        </Routes> */}
                        <Outlet />
                    </Container>
                </Grid>
            </Grid>


        </div>
    )
}
