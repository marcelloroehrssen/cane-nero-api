import React, {useContext, useState} from 'react';
import {Box, Container, Grid, Link, Paper} from "@material-ui/core";
import {useStyles} from "../Styles/Theme";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export default function Footer(props) {

    const classes = useStyles();

    return (
        <Paper elevation={3} component={"footer"}>
            <Container className={classes.footerBox}>
                <Grid container direction="row" justify="center">
                    <Grid item md={4} sm={12}>
                        <Box>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Informazioni
                            </Typography>
                            <Typography variant="h5" component="h2">
                                Cane Nero
                            </Typography>
                            <Typography variant="body2" component="p">
                                Associazione culturale
                                <br/>
                                Finalizzata alla promozione
                                <br/>
                                ed attuazione del gioco di ruolo dal vivo
                                <br/>
                                su tutto il territorio nazionale
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={4} sm={12}>
                        <Box>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Contatti
                            </Typography>
                            <Typography variant="body2" component="p">
                                Scrivi una mail a
                            </Typography>
                            <Typography variant="body2" component="p">
                                <Link color={"secondary"} href={'mailto:presidente@cane-nero.it'}>presidente@cane-nero.it</Link><br />
                                <Link color={"secondary"} href={'mailto:presidente@cane-nero.it'}>direttivo@cane-nero.it</Link><br />
                                <br />
                                <Link color={"secondary"} href={'mailto:presidente@cane-nero.it'}>staff@cane-nero.it</Link><br />
                                <Link color={"secondary"} href={'mailto:presidente@cane-nero.it'}>tech@cane-nero.it</Link><br />
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={4} sm={12}>
                        <Box>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Informazioni
                            </Typography>
                            <Typography variant="h5" component="h2">
                                Cane Nero
                            </Typography>
                            <Typography variant="body2" component="p">
                                Associazione culturale
                                <br/>
                                Finalizzata alla promozione
                                <br/>
                                ed attuazione del gioco di ruolo dal vivo
                                <br/>
                                su tutto il territorio nazionale
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    );
}