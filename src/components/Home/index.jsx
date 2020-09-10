import React, { useEffect } from "react";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typed from "react-typed";
import Aos from "aos";
import "aos/dist/aos.css";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: theme.spacing(12),
  },
  title: {
    color: "red",
    paddingBottom: "-3rem",
  },
  subtitle: {
    color: "black",
    marginBottom: "3rem",
    paddingBottom: "3rem",
  },
  typedContainer: {
    margin: "66px 0",
    top: "10%",
    left: "50%",
    width: "100%",
    textAlign: "center",
    zIndex: 1,
    background: "url(images/background3.png) no-repeat center center fixed",
  },
}));

const Home = () => {
  const classes = useStyles();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-down">
      <Box className={classes.typedContainer}>
        <Grid container justify="center">
          <Avatar
            data-aos="zoom-in-up"
            className={classes.avatar}
            src="images/avatar1.png"
            alt="avatar Filipe Nunes"
          />
        </Grid>

        <Typography data-aos="fade-down" className={classes.title} variant="h4">
          <Typed strings={["Filipe Nunes"]} typeSpeed={40} />
        </Typography>
        <br />
        <Typography
          data-aos="fade-down"
          className={classes.subtitle}
          variant="h5"
        >
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
};

export default Home;
