import React from 'react';
import './Header.css';
import facebook from '../../assets/Header/facebook.png';
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function Header() {

    const classes = useStyles();

    return (
        <header>
            <img src={facebook} alt="Facebook Logo"/>
            <div className={"container-profile"}>
                <div>
                    <h2 className={"white"}>Meu perfil</h2>
                </div>
                <div>
                    <div className={classes.root}>
                        <IconButton aria-label="delete">
                            <AccountCircle fontSize={"large"} className={"white"} />
                        </IconButton>
                    </div>
                </div>
            </div>
        </header>
    )

}
