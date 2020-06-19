import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import createPalette from '@material-ui/core/styles/createPalette';
import {Label} from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
    root: {
        
        margin: theme.spacing(1.5),
        width: '25ch',
        height: '70%'
    },
}
)
);


export default function BasicTextFields(props) {
    const classes = useStyles();


    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField
            id="outlined-basic" 
            label={props.label}
            variant="outlined"
             />
        </form>
    );
}