import React from 'react'
import { Grid } from '@material-ui/core'
import { LeftBar } from '../ui/LeftBar'
import { NavBar } from '../ui/NavBar'
import { Area } from './area/Area'

export const AdminScreen = () => {
    return (
        
        <div>
            <NavBar/>
            <Grid container >
                <Grid item sm={2}>
                    <LeftBar/>
                </Grid>
                <Grid item sm={10}>
                    <Area/>
                </Grid>
            </Grid>
            
        </div>
    )
}
