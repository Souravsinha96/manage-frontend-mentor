import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import intro from "../images/illustration-intro.svg";

const useStyles = makeStyles((theme) => ({
  button: {
    ...theme.typography.started,
    paddingLeft: "2rem",
    paddingRight: "2rem",
    marginTop: "1rem",
  },
  mainContainer: {
    paddingLeft: "140px",
    paddingRight: "100px",
    paddingTop: "50px",
    paddingBottom: "60px",

    [theme.breakpoints.down("md")]: {
      paddingLeft: "20px",
      paddingRight: "20px",
      paddingTop: "50px",
      paddingBottom: "70px",
    },
  },
}));

export default function Banner() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid
      container
      direction={matches ? "column-reverse" : "row"}
      className={classes.mainContainer}
    >
      <Grid item container direction="column" lg>
        <Grid item style={{ marginTop: "2rem" }}>
          <Typography
            variant="h1"
            gutterBottom
            align={matches ? "center" : undefined}
            style={{ fontSize: matches ? "40px" : "64px" }}
          >
            Bring everyone together to bulid better products.
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            align={matches ? "center" : undefined}
            variant="body1"
            paragraph
            style={{
              maxWidth: matches ? "350px" : "400px",
              fontSize: matches ? "16px" : "18px",
            }}
          >
            Manage makes it simple for software teams to plan day-to-day tasks
            while kepping the larger team goals in view.
          </Typography>
        </Grid>
        <Grid item align={matches ? "center" : undefined}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            Get Started
          </Button>
        </Grid>
      </Grid>
      <Grid item lg>
        <img
          src={intro}
          alt="bannner"
          style={{ maxWidth: matches ? "340px" : "100%" }}
        />
      </Grid>
    </Grid>
  );
}
