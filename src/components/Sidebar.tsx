import React from "react";
import { Avatar, Box, makeStyles, Paper, Typography } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import TopChrips from "./TopChrips";

const useStyles = makeStyles((theme) => ({
  sidebar: {
    marginTop: theme.spacing(2),
  },
  userBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  userBoxBanner: {
    height: "100px",
    backgroundImage: "linear-gradient(" + grey[400] + ", white)",
  },
  userName: {
    marginLeft: theme.spacing(1),
  },
}));

const UserPanel = () => {
  const classes = useStyles();

  // TODO: Authentication - Get current logged in user.
  const username = "Jimmy";

  return (
    <>
      <Box className={classes.userBoxBanner} />
      <Box className={classes.userBox}>
        {/* TODO: Authentication - Change to get the user's profile image. */}
        <Avatar>{username[0]}</Avatar>
        <Typography className={classes.userName}>{username}</Typography>
      </Box>
    </>
  );
};

const Sidebar = () => {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.sidebar}>
        <UserPanel />
      </Paper>
      <Paper className={classes.sidebar}>
        <TopChrips />
      </Paper>
    </>
  );
};

export default Sidebar;
