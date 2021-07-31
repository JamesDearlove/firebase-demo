import React from "react";
import { Avatar, Box, makeStyles, Paper, Typography } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

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

  return (
    <>
      <Box className={classes.userBoxBanner} />
      <Box className={classes.userBox}>
        <Avatar>J</Avatar>
        <Typography className={classes.userName}>James Dearlove</Typography>
      </Box>
    </>
  );
};

const Sidebar = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.sidebar}>
      <UserPanel />
    </Paper>
  );
};

export default Sidebar;
