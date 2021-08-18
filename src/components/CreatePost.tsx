import React, { useState } from "react";
import { IconButton, InputBase, makeStyles, Paper } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import firebase, { postsRef } from "../firebase";
import { Post } from "../types";

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

/**
 * Post creation box at the top of the timeline.
 */
const CreatePost = () => {
  const classes = useStyles();
  const [postContent, setPostContent] = useState("");

  const handleClick = () => {
    // TODO: Firestore - Create new post
    const author = firebase.auth().currentUser;

    if (author) {
      const newPost: Post = {
        content: postContent,
        author: author.displayName || "No name",
        authorId: author.uid,
        postTime: new Date(),
        liked: [],
      };
      postsRef.add(newPost);
      setPostContent("");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPostContent(event.target.value);
  };

  return (
    <Paper className={classes.paper}>
      <InputBase
        className={classes.textArea}
        multiline={true}
        value={postContent}
        onChange={handleChange}
        placeholder="Write a masterpiece"
      />
      <IconButton className={classes.sendButton} onClick={handleClick}>
        <SendIcon />
      </IconButton>
    </Paper>
  );
};

export default CreatePost;
