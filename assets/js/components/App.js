import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Container} from "@material-ui/core";
import {UserContextProvider} from "../provider/UserContext";
import Header from "./Header";
import {ThemeProvider} from "@material-ui/styles";
import {theme, useStyles} from "../Styles/Theme"
import NewsList from "./NewsList";
import Footer from "./Footer";


export default function App(props) {

    const classes = useStyles();

    return (
        <UserContextProvider>
            <ThemeProvider theme={theme}>
                <div className={classes.root}>
                    <Header />
                    <img width={"100%"} src={"https://battleforvilegis.com/wp-content/uploads/2019/10/battle-for-vilegis.jpg"} alt={"placeholder image"}/>
                    <Container>
                        <CssBaseline/>
                        <NewsList title={"In Evidenza"} type={"featured"}/>
                        <NewsList title={"Tornando Indietro"} type={"old"}/>
                    </Container>
                    <Footer/>
                </div>
            </ThemeProvider>
        </UserContextProvider>
    );
}
