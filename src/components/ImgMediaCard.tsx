import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
        margin: theme.spacing(4, 2),
        display: "flex",
        flexDirection: "column",
    },
    actions: {
        marginTop: "auto",
    },
    img: {
        objectFit: "contain",
    },
    role: {
        marginTop: theme.spacing(1),
    },
    team: {
        marginTop: theme.spacing(1),
    },
}));

interface IImgMediaCardData {
    title: string;
    description: string;
    imgPath: string;
    imgTitle: string; // relative to /public/ (should start with a folder or file inside of public)
    imgAlt: string;
    externalLink: string;
    internalLink: string;
    role: string;
    teamSize: string;
}

interface Props extends IImgMediaCardData {}

const ImgMediaCard: React.FunctionComponent<Props> = props => {
    const classes = useStyles();

    const handleClicked = () => window.open(props.externalLink, "_blank");
    return (
        <Card className={classes.card}>
            <CardActionArea onClick={handleClicked}>
                <CardMedia
                    component="img"
                    alt={props.imgAlt}
                    height="140"
                    image={props.imgPath}
                    title={props.imgTitle}
                    className={classes.img}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        {props.description}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        className={classes.role}
                    >
                        Role: {props.role}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        className={classes.team}
                    >
                        Team: {props.teamSize}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.actions}>
                <Button size="small" color="primary" onClick={handleClicked}>
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
};

export default ImgMediaCard;
