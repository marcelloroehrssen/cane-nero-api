import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Users from "./Users";
import {Container} from "@material-ui/core";
import {UserContextProvider} from "../provider/UserContext";
import Header from "./Header";
import {ThemeProvider} from "@material-ui/styles";
import {theme, useStyles} from "../Styles/Theme"

export default function App(props) {

    const classes = useStyles();

    return (
        <UserContextProvider>
            <ThemeProvider theme={theme}>
                <div className={classes.root}>
                    <Header />
                    <Container>
                        <CssBaseline/>
                        <Users/>
                    </Container>
                </div>
            </ThemeProvider>
        </UserContextProvider>
    );
}
