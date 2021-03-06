import {createMuiTheme, makeStyles} from "@material-ui/core/styles";

export const theme = createMuiTheme(
    {
        "palette": {
            "common": {
                "black": "rgba(0, 0, 0, 1)",
                "white": "#fff"
            },
            "background": {
                "paper": "rgba(51, 51, 51, 1)",
                "default": "rgba(153, 153, 153, 1)"
            },
            "primary": {
                "light": "rgba(227, 227, 227, 1)",
                "main": "rgba(51, 51, 51, 1)",
                "dark": "rgba(51, 51, 51, 1)",
                "contrastText": "rgba(227, 227, 227, 1)"
            },
            "secondary": {
                "light": "rgba(252, 252, 252, 1)",
                "main": "rgba(204, 204, 204, 1)",
                "dark": "rgba(112, 112, 112, 1)",
                "contrastText": "rgba(255, 255, 255, 1)"
            },
            "error": {
                "light": "#e57373",
                "main": "rgba(154, 0, 0, 1)",
                "dark": "#d32f2f", "contrastText": "#fff"
            },
            "text": {
                "primary": "rgba(243, 243, 243, 0.87)",
                "secondary": "rgba(255, 255, 255, 0.54)",
                "disabled": "rgba(70, 0, 0, 0.38)",
                "hint": "rgba(162, 116, 116, 0.38)"
            }
        },
        "typography": {
            "h4": {
                "fontFamily": [
                    "long_shot"
                ],
            },
            "h5": {
                "fontFamily": [
                    "long_shot"
                ],
            }
        }
    }
);


export const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    headerOnTop: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
    },
    logoBig: {
        marginRight: theme.spacing(2),
        width: 100,
        height: 100,
    },
    logoSmall: {
        marginRight: theme.spacing(2),
        width: 30,
        height: 30,
    },
    scrollTop: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    section: {
        marginTop: theme.spacing(8), color: theme.palette.primary.dark,
    },
    sectionHr: {
        borderColor: theme.palette.primary.dark,
    },
    footerBox: {
        padding: 40
    },
}));
