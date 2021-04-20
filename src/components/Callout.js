import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/styles";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

import bgCallout from "../images/bg-simplify-section-mobile.svg";
import bgCallout1 from "../images/bg-simplify-section-desktop.svg";

const useStyles = makeStyles((theme) => ({
  button: {
    ...theme.typography.started,
    paddingLeft: "2rem",
    paddingRight: "2rem",
    marginTop: "2rem",
    backgroundColor: "#fff",
    color: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: "#fff",
      color: theme.palette.secondary.main,
    },
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

export default function Callout() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      container
      style={{
        backgroundColor: theme.palette.secondary.main,
        minHeight: "200px",
        marginTop: matches ? "2rem" : "10rem",
        width: "100%",
      }}
    >
      <div
        style={{
          position: "absolute",

          backgroundImage: `url(${matches ? bgCallout : bgCallout1})`,
          backgroundPosition: matches ? "5px 10px" : "184px -186px",
          backgroundRepeat: "no-repeat",
          backgroundSize: matches ? "85px" : "1603px",
          height: matches ? "100vh" : "38vh",
          width: matches ? "40vw" : "100vw",
        }}
      ></div>
      <Grid
        item
        lg
        container
        direction={matches ? "column" : "row"}
        justify="space-between"
        alignItems="center"
        className={classes.mainContainer}
      >
        <Grid item style={{ maxWidth: matches ? "269px" : "400px" }}>
          <Typography
            variant="h2"
            align={matches ? "center" : undefined}
            style={{ color: "#fff" }}
          >
            Simplify how your team works today.
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            Get Started
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
