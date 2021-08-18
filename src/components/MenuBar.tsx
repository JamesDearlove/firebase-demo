import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useEffect } from "react";
import { Box, Popover } from "@material-ui/core";
import firebase, { authUiConfig } from "../firebase";
import { StyledFirebaseAuth } from "react-firebaseui";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  loginPopover: {
    padding: theme.spacing(1),
    width: 300,
  },
}));

/**
 * Button to handle the login, and login dialog.
 */
const LoginButton = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Button color="inherit" onClick={handleClick}>
        Login
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box className={classes.loginPopover}>
          <StyledFirebaseAuth
            uiConfig={authUiConfig}
            firebaseAuth={firebase.auth()}
          />
        </Box>
      </Popover>
    </>
  );
};

/**
 * App bar that sits across the top of the app.
 */
const MenuBar = () => {
  const classes = useStyles();

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        setLoggedIn(!!user);
      });

    return () => unregisterAuthObserver();
  }, []);

  const handleLogoutClick = () => {
    // TODO: Authentication - Logout user
    firebase.auth().signOut();
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Firechirp
          </Typography>
          {loggedIn ? (
            <Button color="inherit" onClick={handleLogoutClick}>
              Logout
            </Button>
          ) : (
            <LoginButton />
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default MenuBar;
