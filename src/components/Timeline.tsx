import React from "react";
import {
  Avatar,
  Box,
  IconButton,
  makeStyles,
  Typography,
  Paper,
} from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import CommentIcon from "@material-ui/icons/Comment";

const useStyles = makeStyles((theme) => ({
  postPaper: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
  },
  timeline: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
  },
  authorBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: theme.spacing(1),
  },
  authorText: {
    marginLeft: theme.spacing(1),
  },
  actionsBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
}));

const PostActions = (props: TimelinePostProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.actionsBox}>
      <IconButton>
        <CommentIcon />
      </IconButton>
      <Box className={classes.actionsBox}>
        <IconButton>
          <FavoriteBorderIcon />
        </IconButton>
        <Typography>{props.likes}</Typography>
      </Box>
    </Box>
  );
};

interface TimelinePostProps {
  content: string;
  author: string;
  authorId: string;
  likes: number;
  comments: string[];
}

const TimelinePost = (props: TimelinePostProps) => {
  const classes = useStyles();

  return (
    <Paper className={classes.postPaper}>
      <Box className={classes.authorBox}>
        <Avatar alt={props.author}>{props.author[0]}</Avatar>
        <Typography className={classes.authorText}>{props.author}</Typography>
      </Box>
      <Typography>{props.content}</Typography>
      <PostActions {...props} />
    </Paper>
  );
};

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
      {tempPosts.map((post) => (
        <TimelinePost {...post} />
      ))}
    </Paper>
  );
};

export default Timeline;
