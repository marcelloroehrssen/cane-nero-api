import React from 'react';
import {Typography} from "@material-ui/core";
import {useStyles} from "../Styles/Theme";

export default function Section(props) {

    const classes = useStyles();

    return (
        <section className={classes.section}>
            <Typography variant="h4" component="h4" className={classes.title}>
                {props.title}
            </Typography>
            <hr className={classes.sectionHr}/>
            {props.children}
        </section>
    );
}