import React, { useEffect, useState } from "react";
import { Avatar, Box, makeStyles, Typography } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import firebase from "../firebase";

const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  boxBanner: {
    height: "100px",
    backgroundImage: "linear-gradient(" + grey[400] + ", white)",
  },
  userName: {
    marginLeft: theme.spacing(1),
  },
}));

/**
 * User panel component for the sidebar.
 */
const UserPanel = () => {
  const classes = useStyles();

  // TODO: Authentication - Get current logged in user.
  // TODO: This should also be handled in state.
  // const userName = "Jimmy";
  const [userName, setUserName] = useState<string | null | undefined>("");
  const [userPicture, setUserPicture] = useState<string | null | undefined>("");

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        setUserName(user?.displayName);
        setUserPicture(user?.photoURL);
      });

    // Make sure we un-register Firebase observers when the component unmounts.
    return () => unregisterAuthObserver();
  }, []);

  return userName ? (
    <>
      <Box className={classes.boxBanner} />
      <Box className={classes.box}>
        {/* TODO: Authentication - Change to get the user's profile image. */}
        <Avatar src={userPicture || ""} alt={userName}>
          {userName[0]}
        </Avatar>
        <Typography className={classes.userName}>{userName}</Typography>
      </Box>
    </>
  ) : (
    <></>
  );
};

export default UserPanel;
