import React from "react";
import { makeStyles, Paper } from "@material-ui/core";
import UserPanel from "./UserPanel";

const useStyles = makeStyles((theme) => ({
  sidebar: {
    marginTop: theme.spacing(2),
  },
}));

/**
 * Sidebar parent to the user info panel and the top chirps
 */
const Sidebar = () => {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.sidebar}>
        <UserPanel />
      </Paper>
      {/* I've disabled this because I was short on time, feel free to give it a shot! */}
      {/* <Paper className={classes.sidebar}>
        <TopChirps />
      </Paper> */}
    </>
  );
};

export default Sidebar;
