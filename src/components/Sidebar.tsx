import React from "react";
import { makeStyles, Paper } from "@material-ui/core";
import TopChirps from "./TopChirps";
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
      <Paper className={classes.sidebar}>
        <TopChirps />
      </Paper>
    </>
  );
};

export default Sidebar;
