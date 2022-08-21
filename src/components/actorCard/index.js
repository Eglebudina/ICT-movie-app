import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
//import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
//import Typography from "@material-ui/core/Typography";
// import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
// import StarRateIcon from "@material-ui/icons/StarRate";
// import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  card: { maxWidth: 345 },
  media: { height: 360 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
});

export default function ActorCard({ actor, action }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader className={classes.header} title={actor.name} />
      <CardMedia
        className={classes.media}
        image={
          actor.poster_path
            ? `https://image.tmdb.org/t/p/w500/${actor.poster_path}`
            : `${process.env.PUBLIC_URL}/assets/film-poster-placeholder.png`
        }
      />
      <CardActions >
        {action(actor)}
        <Link to={`/actor/${actor.id}`}>
          <Button variant="outlined" size="medium">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}