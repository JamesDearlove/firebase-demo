import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  IconButton,
  makeStyles,
  Typography,
  Paper,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import CommentIcon from "@material-ui/icons/Comment";
import { Post } from "../types";

const useStyles = makeStyles((theme) => ({
  postPaper: {
    marginBottom: theme.spacing(2),
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
  liked: {
    color: theme.palette.secondary.main,
  },
}));

/**
 * The post actions, like or comment, for a post.
 * @param props.post Post the buttons represent.
 */
const PostActions = (props: { post: Post }) => {
  const classes = useStyles();

  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(false);
  }, []);

  const onCommentClick = () => {};

  const onLikeClick = () => {
    // TODO: Firestore - Toggle user liked state.
  };

  return (
    <Box className={classes.actionsBox}>
      <IconButton onClick={onCommentClick}>
        <CommentIcon />
      </IconButton>
      <Box className={classes.actionsBox}>
        <IconButton onClick={onLikeClick}>
          {liked ? (
            <FavoriteIcon className={classes.liked} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
        <Typography>{props.post.liked.length}</Typography>
      </Box>
    </Box>
  );
};

/**
 * Display the given post in a timeline format.
 * @param props.post Post to display.
 */
export const TimelinePost = (props: { post: Post }) => {
  const classes = useStyles();

  try {
    return (
      <Paper className={classes.postPaper}>
        <Box className={classes.authorBox}>
          <Avatar alt={props.post.author}>{props.post.author[0]}</Avatar>
          <Typography className={classes.authorText}>
            {props.post.author}
          </Typography>
        </Box>
        <Typography>{props.post.content}</Typography>
        <PostActions post={props.post} />
      </Paper>
    );
  } catch {
    return <></>;
  }
};
