import React from "react";
import { Avatar, Box, makeStyles, Paper, Typography } from "@material-ui/core";
import { sampleAuthors, samplePosts } from "../sampleData";
import { Post } from "../types";

const useStyles = makeStyles((theme) => ({
  topBox: {
    padding: theme.spacing(2),
  },
  paper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1),
  },
  authorBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  authorName: {
    marginLeft: theme.spacing(1),
  },
}));

const TopChirp = (props: Post) => {
  const classes = useStyles();

  // TODO: Firestore - Get author information.
  const author = sampleAuthors.find((author) => author.id === props.author);

  return (
    <Box>
      <Paper className={classes.paper}>
        <Box className={classes.authorBox}>
          <Avatar>{author?.name[0]}</Avatar>
          <Typography className={classes.authorName}>{author?.name}</Typography>
        </Box>
        <Typography>{props.liked.length}</Typography>
      </Paper>
    </Box>
  );
};

const TopChrips = () => {
  const classes = useStyles();

  // TODO: Firestore - Get top Chirps from Firestore.
  const topPosts = samplePosts
    .sort((a, b) => b.liked.length - a.liked.length)
    .slice(0, 3);

  return (
    <>
      <Box className={classes.topBox}>
        <Typography variant="h5">Top Chirps</Typography>
        {topPosts.map((posts) => (
          <TopChirp {...posts} />
        ))}
      </Box>
    </>
  );
};

export default TopChrips;