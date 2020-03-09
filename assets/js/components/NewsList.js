import React, {useState} from 'react';
import {theme, useStyles} from "../Styles/Theme";
import {CircularProgress, Grow, Link, Typography, Zoom} from "@material-ui/core";
import useHttp from "../hooks/UseHttp";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from '@material-ui/icons/Info';
import Section from "./Section";
import AutorenewIcon from '@material-ui/icons/Autorenew';
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import Loader from "./Loader";

export default function NewsList(props) {

    const [newsList, setNewsList] = useState(null);
    useHttp('/news?type=' + (props.type || 'featured'), {}, setNewsList);
    const classes = useStyles();

    const content = () => {
        return (
            <React.Fragment>
                <div className={classes.root}>
                    <GridList cols={12} cellHeight={400}>
                        {newsList.map((news, index) => {
                            let col = (index % 3) === 0 ? 12 : 6;
                            return (
                                <GridListTile key={news.id} className={"news-container"} cols={col}>
                                    <img src={news.image} alt={news.title}/>
                                    <GridListTileBar
                                        title={news.title}
                                        actionIcon={
                                            <IconButton>
                                                <InfoIcon color={"secondary"}/>
                                            </IconButton>
                                        }
                                    />
                                </GridListTile>
                            );
                        })}
                    </GridList>
                </div>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item>
                        <Tooltip title="Vedi Altri" aria-label="Vedi Altri" placement="bottom" arrow>
                            <IconButton className={"news_load_more"}>
                                <AutorenewIcon color={"secondary"}/>
                            </IconButton>
                        </Tooltip>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    };

    if (newsList === null) {
        return (
            <Section className={classes.section} title={props.title}>
                <Loader />
            </Section>
        );
    } else {
        return (
            <Section className={classes.section} title={props.title}>
                { content() }
            </Section>
        );
    }
}