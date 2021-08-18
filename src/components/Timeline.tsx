import React, { useEffect, useState } from "react";
import { makeStyles, Paper } from "@material-ui/core";
import CreatePost from "./CreatePost";
import { TimelinePost } from "./TimelinePost";
import firebase, { postsRef } from "../firebase";
import { Post } from "../types";

const useStyles = makeStyles((theme) => ({
  timeline: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
  },
}));

/**
 * Timeline which contains the posts and the create post component.
 */
const Timeline = () => {
  const classes = useStyles();

  const [loggedIn, setLoggedIn] = useState(false);
  const [posts, setPosts] = useState<
    firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>[]
  >([]);

  useEffect(() => {
    postsRef.onSnapshot((data) => setPosts(data.docs));
  }, []);

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        setLoggedIn(!!user);
      });

    return () => unregisterAuthObserver();
  }, []);

  return (
    <Paper className={classes.timeline}>
      {loggedIn && <CreatePost />}
      {posts
        .sort((a, b) => b.data().postTime - a.data().postTime)
        .map((post) => (
          <TimelinePost post={post.data() as Post} />
        ))}
    </Paper>
  );
};

export default Timeline;
