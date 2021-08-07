import React from "react";
import { makeStyles, Paper } from "@material-ui/core";
import CreatePost from "./CreatePost";
import { TimelinePost } from "./TimelinePost";
import { samplePosts } from "../sampleData";

const useStyles = makeStyles((theme) => ({
  timeline: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
  },
}));

const Timeline = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.timeline}>
      <CreatePost />
      {samplePosts.map((post) => (
        <TimelinePost post={post} />
      ))}
    </Paper>
  );
};

export default Timeline;
