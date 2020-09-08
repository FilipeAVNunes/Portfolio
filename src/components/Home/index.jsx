import React from "react";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typed from "react-typed";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    margin: theme.spacing(12),
  },
  title: {
    color: "red",
  },
  subtitle: {
    color: "black",
    marginBottom: "3rem",
  },
  typedContainer: {
    margin: "66px 0",
    top: "10%",
    left: "50%",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
    background: "url(images/background.png) no-repeat center center fixed",
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.typedContainer}>
        <Grid container justify="center">
          <Avatar
            className={classes.avatar}
            src="images/avatar.png"
            alt="avatar Filipe Nunes"
          />
        </Grid>

        <Typography className={classes.title} variant="h4">
          <Typed strings={["Filipe Nunes"]} typeSpeed={40} />
        </Typography>
        <br />
        <Typography className={classes.subtitle} variant="h5">
          <Typed
            strings={[
              "Fullstack Web Developer",
              "MERN Stack",
              "Web Development",
            ]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
        </Typography>
      </Box>
    </div>
  );
}

export default Home;
