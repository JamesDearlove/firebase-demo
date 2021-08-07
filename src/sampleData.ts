// This file contains example data to stand in
// for the data that will be provided by Firebase.

import { Post, Author } from "./types";

export const sampleAuthors: Author[] = [
  {
    id: "abcd123",
    name: "Jimmy",
  },
  {
    id: "abce123",
    name: "Not Jimmy",
  }
];

export const samplePosts: Post[] = [
  {
    id: "abc1",
    content: "Hi Mum!",
    author: "abcd123",
    comments: [],
    liked: ["a", "b", "c"],
    postTime: new Date(),
  },
  {
    id: "abc2",
    content: "Have you heard the good news of #TheOwlHouseSeason2?",
    author: "abcd123",
    comments: [],
    liked: ["a", "b", "c", "d", "e"],
    postTime: new Date(),
  },
  {
    id: "abc3",
    content:
      "Not everything is as it seems at face value. " +
      "Sometimes you need to look beneath the surface. " +
      "Other times you’re just looking at it upside down.",
    author: "abcd123",
    comments: [],
    liked: ["a", "b", "c", "e", ],
    postTime: new Date(),
  },
  {
    id: "abc4",
    content: "Why are you reading these?",
    author: "abce123",
    comments: [],
    liked: ["a", "b", "c"],
    postTime: new Date(),
  },
  {
    id: "abc5",
    content: "Hoot hoot",
    author: "abcd123",
    comments: [],
    liked: ["a", "b", "c", "d", "e", "f", "g", "h"],
    postTime: new Date(),
  },
];
