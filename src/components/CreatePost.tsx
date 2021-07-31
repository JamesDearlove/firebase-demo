import React from "react";
import { IconButton, InputBase, makeStyles, Paper } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(1),
    display: "flex",
  },
  textArea: {
    width: "100%",
  },
  sendButton: {
    marginRight: 0,
    alignSelf: "flex-end",
  },
}));

const CreatePost = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <InputBase
        className={classes.textArea}
        multiline={true}
        placeholder="Write a masterpiece"
      />
      <IconButton className={classes.sendButton}>
        <SendIcon />
      </IconButton>
    </Paper>
  );
};

export default CreatePost;
