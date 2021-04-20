import { Grid, Button, Typography } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

import img1 from "../images/avatar-anisha.png";
import img2 from "../images/avatar-ali.png";
import img3 from "../images/avatar-richard.png";
import img4 from "../images/avatar-shanai.png";

const people = [
  {
    image: img1,
    alt: "testimonail1",
    title: "Anisha Li",
    content:
      "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
  },
  {
    image: img2,
    alt: "testimonail2",
    title: "Ali Bravo",
    content:
      "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
  },
  {
    image: img3,
    alt: "testimonail3",
    title: "Richard Watts",
    content:
      "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”",
  },
  {
    image: img4,
    alt: "testimonail4",
    title: "Shanai Gough",
    content:
      "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
  },
];

const useStyles = makeStyles((theme) => ({
  testimonialContainer: {
    backgroundColor: theme.palette.common.grey,
    minHeight: "220px",
    maxWidth: "70vw",

    [theme.breakpoints.down("sm")]: {
      maxWidth: "400px",
    },
    padding: "15px",
  },
  image: {
    width: "100px",
    position: "relative",
    left: "20px",
    bottom: "-45px",
  },
  button: {
    ...theme.typography.started,
    paddingLeft: "2rem",
    paddingRight: "2rem",
    marginTop: "2rem",
  },
}));

export default function Testimonials() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [page, setPage] = useState(1);
  const [testimonial, setTestimonial] = useState(people[0]);
  const handleChange = (event, value) => {
    setPage(value);
    switch (value) {
      case 1:
        setTestimonial(people[0]);
        break;
      case 2:
        setTestimonial(people[1]);
        break;
      case 3:
        setTestimonial(people[2]);
        break;
      case 4:
        setTestimonial(people[3]);
        break;

      default:
        break;
    }
  };

  return (
    <Grid container>
      <Grid
        item
        container
        direction="column"
        style={{
          marginTop: "10px",
          marginBottom: "10px",
          marginLeft: matches ? "20px" : "10px",
          marginRight: matches ? "20px" : "10px",
        }}
        alignItems="center"
      >
        <Grid item className={classes.image}>
          <img
            src={testimonial.image}
            alt={testimonial.alt}
            style={{
              height: matches ? "60px" : "80px",
              width: matches ? "60px" : "80px",
            }}
          />
        </Grid>
        <Grid
          item
          container
          direction="column"
          className={classes.testimonialContainer}
          justify="center"
        >
          <Typography
            variant="h3"
            align="center"
            style={{ marginBottom: "1rem", paddingTop: "2.5rem" }}
          >
            {testimonial.title}
          </Typography>
          <Typography variant="body2" align="center">
            {testimonial.content}
          </Typography>
        </Grid>

        <Grid item container justify="center" style={{ marginTop: "10px" }}>
          <Pagination
            size={matches ? "small" : "medium"}
            color="secondary"
            count={4}
            page={page}
            onChange={handleChange}
          />
        </Grid>
        <Grid item align="center">
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
