import React, {useContext, useState} from 'react';
import {
    AppBar, Toolbar, Menu, MenuItem, Button, Slide, Zoom, Box,
    Tooltip, Fab, IconButton, Typography, useScrollTrigger,
    Link, CircularProgress, Avatar, ListItemIcon, ListItemText
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import {theme, useStyles} from "../Styles/Theme";
import logo from "../../images/logo.jpg";
import UserContext from "../provider/UserContext";
import Grid from "@material-ui/core/Grid";

const options = {
    title: 'Cane nero',
    menuLink: [
        {key: 1, url: '#', label: 'Chi Siamo'},
        {key: 2, url: '#', label: 'Le Nostre Cronache'},
        {key: 3, url: '#', label: 'News'},
        {key: 4, url: '#', label: 'Calendario'},
        {key: 5, url: '#', label: 'Staff'},
        {key: 6, url: '#', label: 'Contatti'},
    ]
};

export default function Header(props) {

    const [anchorEl, setAnchorEl] = useState(null);
    const user = useContext(UserContext).user;
    const classes = useStyles();
    const trigger = useScrollTrigger({
        "disableHysteresis": true,
        "threshold": 200
    });

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const scrollTop = event => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({behavior: 'smooth', block: 'center'});
        }
    };

    const loggedInComponent = () => {
        if (null === user) {
            return <CircularProgress/>;
        }
        if (user.isLogged === 1) {
            return (
                <div>
                    <IconButton
                        aria-controls="loginMenu"
                        aria-haspopup="true"
                        onClick={handleClick}
                        color="primary"
                    >
                        <Avatar alt={user.username} src={user.avatar}>
                            {user.firstName.slice(0, 1)}{user.lastName.slice(0, 1)}
                        </Avatar>
                    </IconButton>
                    <Menu
                        id="loginMenu"
                        elevation={3}
                        getContentAnchorEl={null}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem>
                            <ListItemIcon>
                                <AccountCircleIcon color="secondary" fontSize="small"/>
                            </ListItemIcon>
                            <ListItemText primary="Il tuo Profilo" fontSize="small"/>
                        </MenuItem>
                        <MenuItem divider={true}>
                            <ListItemIcon>
                                <MonetizationOnIcon color="secondary" fontSize="small"/>
                            </ListItemIcon>
                            <ListItemText primary="La tua Iscrizione" fontSize="small"/>
                        </MenuItem>
                        <MenuItem dense={true}>
                            <ListItemIcon>
                                <MeetingRoomIcon color="secondary" fontSize="small"/>
                            </ListItemIcon>
                            <ListItemText primary="Logout" fontSize="small"/>
                        </MenuItem>
                    </Menu>
                </div>
            );
        } else {
            return (
                <Tooltip title="Accedi al tuo account" aria-label="add" arrow>
                    <Button color="inherit">
                        <AccountCircleIcon/> Login
                    </Button>
                </Tooltip>
            );
        }
    };

    const bar = (id, position, logoStyles, options) => {
        let className = '';
        if (position === 'top') {
            className = classes.headerOnTop;
        }
        return (
            <AppBar position={"fixed"} id={id} className={className}>
                <Toolbar>
                    <Grid container>
                        <Grid container item xs={12} md={6} direction={"row"} justify="flex-start" alignItems="center">
                            <Grid item>
                                <img src={logo} className={logoStyles} alt="Cane Nero - GDR"/>
                            </Grid>
                            <Grid item>
                                <Typography variant="h4" component="h1" display={"inline"}>
                                    {options.title}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} md={6} direction={"row"} justify="flex-end" alignItems="center" component={"nav"}>
                            {
                                options.menuLink.map((item) => {
                                    return (
                                        <Grid key={item.key} item xs={12} md={2}>
                                            <Typography align={"center"}>
                                                <Link  href={item.url} variant="body2" color="inherit">{item.label}</Link>
                                            </Typography>
                                        </Grid>
                                    );
                                })
                            }
                        </Grid>
                    </Grid>
                    {/*<nav className={classes.menuLinkList}>*/}
                    {/*</nav>*/}
                    {loggedInComponent()}
                </Toolbar>
            </AppBar>
        );
    };

    return (
        <React.Fragment>
            <Slide in={!trigger}>
                {bar("back-to-top-anchor", "top", classes.logoBig, options)}
            </Slide>
            <Slide in={trigger}>
                {bar("back-to-top-anchor-fixed", "fixed", classes.logoSmall, options)}
            </Slide>
            <Zoom in={trigger}>
                <div onClick={scrollTop} role="presentation" className={classes.scrollTop}>
                    <Fab color="secondary" size="small" aria-label="scroll back to top">
                        <KeyboardArrowUpIcon/>
                    </Fab>
                </div>
            </Zoom>
        </React.Fragment>
    );
}
