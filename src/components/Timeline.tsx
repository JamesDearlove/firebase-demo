import React from "react";
import { makeStyles, Paper } from "@material-ui/core";
import CreatePost from "./CreatePost";
import { TimelinePost, TimelinePostProps } from "./TimelinePost";

const useStyles = makeStyles((theme) => ({
  timeline: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
  },
}));

const tempPosts: TimelinePostProps[] = [
  {
    content: "You should watch The Owl House.",
    author: "James",
    authorId: "fakeid",
    comments: [],
    likes: 5,
  },
  {
    content: "You should watch Amphibia.",
    author: "James",
    authorId: "fakeid",
    comments: [],
    likes: 5,
  },
  {
    content: "You should watch The Dragon Prince.",
    author: "James",
    authorId: "fakeid",
    comments: [],
    likes: 5,
  },
];

const Timeline = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.timeline}>
      <CreatePost />
      {tempPosts.map((post) => (
        <TimelinePost {...post} />
      ))}
    </Paper>
  );
};

export default Timeline;
