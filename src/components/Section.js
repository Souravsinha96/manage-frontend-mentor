import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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
  button: {
    ...theme.typography.started,
    paddingLeft: "1.8rem",
    paddingRight: "1.8rem",
    fontSize: "18px",
    fontWeight: 700,
    cursor: "auto",
    "&:hover": {
      backgroundColor: theme.palette.common.red,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
      height: "35px",
      paddingLeft: "1rem",
      paddingRight: "1rem",
    },
  },
  bg: {
    [theme.breakpoints.down("md")]: {
      backgroundColor: "#FFF0EC",
      width: "94.6vw",
    },
  },
}));

export default function Section() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid
      container
      direction={matches ? "column" : "row"}
      className={classes.mainContainer}
    >
      <Grid item container direction="column" lg>
        <Grid item>
          <Typography
            variant="h2"
            align={matches ? "center" : undefined}
            gutterBottom
            style={{
              fontSize: matches ? "35px" : "40px",
              maxWidth: matches ? "350px" : "450px",
            }}
          >
            What's different about Manage?
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            align={matches ? "center" : undefined}
            style={{
              maxWidth: matches ? "360px" : "400px",
              fontSize: matches ? "14px" : "18px",
              marginLeft: matches ? "5px" : 0,
              marginRight: matches ? "5px" : 0,
            }}
          >
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </Typography>
        </Grid>
      </Grid>
      <Grid item container direction="column" lg>
        <Grid
          item
          container
          direction="row"
          className={classes.bg}
          style={{ marginTop: matches ? "3rem" : 0 }}
        >
          <Grid item>
            <Button
              disableRipple
              disableElevation
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              01
            </Button>
          </Grid>
          <Grid
            item
            style={{
              marginLeft: matches ? "1rem" : "2rem",
              marginTop: matches ? "5px" : "10px",
            }}
          >
            <Typography
              variant="h3"
              style={{ fontSize: matches ? "16px" : "18px" }}
            >
              Track company-wide progress
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          style={{
            marginLeft: matches ? 0 : "7rem",
            maxWidth: matches ? "338px" : "500px",
          }}
        >
          <Typography
            variant="body1"
            style={{
              fontSize: matches ? "14px" : "18px",
              marginTop: matches ? "0.5rem" : 0,
              lineHeight: matches ? 1.8 : 1.5,
            }}
          >
            See how your day-to-day tasks fit into the wider vision. Go from
            tracking progress at the milestone level all the way done to the
            samllest of details. Never lose sight of the bigger picture again.
          </Typography>
        </Grid>
        <Grid
          item
          container
          direction="row"
          style={{ marginTop: "3rem" }}
          className={classes.bg}
        >
          <Grid item>
            <Button
              disableRipple
              disableElevation
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              02
            </Button>
          </Grid>
          <Grid
            item
            style={{
              marginLeft: matches ? "1rem" : "2rem",
              marginTop: matches ? "5px" : "10px",
            }}
          >
            <Typography
              variant="h3"
              style={{ fontSize: matches ? "16px" : "18px" }}
            >
              Advanced built-in reports
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          style={{
            marginLeft: matches ? 0 : "7rem",
            maxWidth: matches ? "338px" : "500px",
          }}
        >
          <Typography
            variant="body1"
            style={{
              fontSize: matches ? "14px" : "18px",
              marginTop: matches ? "0.5rem" : 0,
              lineHeight: matches ? 1.8 : 1.5,
            }}
          >
            See how your day-to-day tasks fit into the wider vision. Go from
            tracking progress at the milestones level all the way done to the
            samllest of details. Never lose sight og the bigger picture again.
          </Typography>
        </Grid>
        <Grid
          item
          container
          direction="row"
          style={{ marginTop: "3rem" }}
          className={classes.bg}
        >
          <Grid item>
            <Button
              disableRipple
              disableElevation
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              03
            </Button>
          </Grid>
          <Grid
            item
            style={{
              marginLeft: matches ? "1rem" : "2rem",
              marginTop: matches ? "5px" : "10px",
            }}
          >
            <Typography
              variant="h3"
              style={{ fontSize: matches ? "16px" : "18px" }}
            >
              Everything you need in one place
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          style={{
            marginLeft: matches ? 0 : "7rem",
            maxWidth: matches ? "338px" : "500px",
          }}
        >
          <Typography
            variant="body1"
            style={{
              fontSize: matches ? "14px" : "18px",
              marginTop: matches ? "0.5rem" : 0,
              lineHeight: matches ? 1.8 : 1.5,
            }}
          >
            See how your day-to-day tasks fit into the wider vision. Go from
            tracking progress at the milestones level all the way done to the
            samllest of details.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
