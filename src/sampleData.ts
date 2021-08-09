// This file contains example data to stand in
// for the data that will be provided by Firebase.

import { Post } from "./types";

export const samplePosts: Post[] = [
  {
    content: "Hi Mum!",
    author: "Jimmy",
    authorId: "abcd123",
    comments: [],
    liked: ["a", "b", "c"],
    postTime: new Date(),
  },
  {
    content: "Have you heard the good news of #TheOwlHouseSeason2?",
    author: "Jimmy",
    authorId: "abcd123",
    comments: [],
    liked: ["a", "b", "c", "d", "e"],
    postTime: new Date(),
  },
  {
    content:
      "Not everything is as it seems at face value. " +
      "Sometimes you need to look beneath the surface. " +
      "Other times you’re just looking at it upside down.",
    author: "Jimmy",
    authorId: "abcd123",
    comments: [],
    liked: ["a", "b", "c", "e"],
    postTime: new Date(),
  },
  {
    content: "Why are you reading these?",
    author: "Not Jimmy",
    authorId: "abce123",
    comments: [],
    liked: ["a", "b", "c"],
    postTime: new Date(),
  },
  {
    content: "Hoot hoot",
    author: "Jimmy",
    authorId: "abcd123",
    comments: [],
    liked: ["a", "b", "c", "d", "e", "f", "g", "h"],
    postTime: new Date(),
  },
];
