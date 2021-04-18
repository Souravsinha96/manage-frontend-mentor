import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

import DialogContent from "@material-ui/core/DialogContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

import logo from "../../images/logo.svg";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.modal + 1,
  },

  logo: {
    height: "25px",
    marginLeft: "100px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "5px",
      height: "20px",
    },
  },
  tabContainer: {
    marginLeft: "200px",
  },
  tab: {
    ...theme.typography.tab,
    marginLeft: "25px",
    minWidth: 10,
    "&:hover": {
      color: theme.palette.primary.light,
    },
  },
  button: {
    ...theme.typography.started,
    marginLeft: "auto",
    marginRight: "60px",
    paddingLeft: "30px",
    paddingRight: "30px",
    width: "9rem",
  },
  dialog: {
    position: "absolute",
    top: "100px",
    width: "85%",
  },

  dialogIconContainer: {
    marginLeft: "auto",
  },
  dialogIcon: {
    height: "40px",
    width: "40px",
  },
  dialogItem: {
    ...theme.typography.tab,
    textAlign: "center",
  },
}));
const options = ["Pricing", "Product", "About Us", "Careers", "Community"];

export default function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const tabs = (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
        textColor="primary"
        centered
        TabIndicatorProps={{ style: { height: 0 } }}
      >
        {options.map((option, index) => (
          <Tab key={index} label={option} className={classes.tab} />
        ))}
      </Tabs>
      <Button variant="contained" color="secondary" className={classes.button}>
        Get Started
      </Button>
    </>
  );
  const drawer = (
    <>
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        anchor="top"
        classes={{
          paper: classes.dialog,
        }}
        BackdropProps={{
          style: {
            backgroundImage: `linear-gradient(to bottom, #ffffff, #c7c7c7, #929292, #606060, #333333)`,
          },
        }}
      >
        <DialogContent style={{ padding: "20px 0" }}>
          <List disablePadding>
            {options.map((option, index) => (
              <ListItem key={index} button onClick={() => setOpenDialog(false)}>
                <ListItemText className={classes.dialogItem} disableTypography>
                  {option}
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </DialogContent>
      </Dialog>

      <IconButton
        className={classes.dialogIconContainer}
        onClick={() => setOpenDialog(!openDialog)}
        disableRipple
      >
        {openDialog ? (
          <CloseIcon className={classes.dialogIcon} />
        ) : (
          <MenuIcon className={classes.dialogIcon} />
        )}
      </IconButton>
    </>
  );

  return (
    <>
      <AppBar
        color="transparent"
        elevation={0}
        position="static"
        className={classes.appBar}
      >
        <Toolbar style={{ padding: matches ? "20px" : "40px" }} disableGutters>
          <img src={logo} alt="logo" className={classes.logo} />
          {matches ? drawer : tabs}
        </Toolbar>
      </AppBar>
    </>
  );
}
