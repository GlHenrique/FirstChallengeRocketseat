import React from 'react';
import './Header.css';
import facebook from '../../assets/Header/facebook.png';
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Card from "@material-ui/core/Card";


const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function Header() {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

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
                        <IconButton aria-label="delete"
                                    aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            <AccountCircle fontSize={"large"} className={"white"} />
                        </IconButton>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                    </div>
                </div>
            </div>
        </header>

    )

}
