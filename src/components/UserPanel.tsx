import React from "react";
import { Avatar, Box, makeStyles, Typography } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

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
  const userName = "Jimmy";

  return (
    <>
      <Box className={classes.boxBanner} />
      <Box className={classes.box}>
        {/* TODO: Authentication - Change to get the user's profile image. */}
        <Avatar alt={userName}>
          {userName[0]}
        </Avatar>
        <Typography className={classes.userName}>{userName}</Typography>
      </Box>
    </>
  );
};

export default UserPanel;
