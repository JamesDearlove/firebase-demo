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
    content: "Hi Mum!",
    author: "abcd123",
    comments: [],
    liked: ["a", "b", "c"],
    postTime: new Date(),
  },
  {
    content: "Have you heard the good news of #TheOwlHouseSeason2?",
    author: "abcd123",
    comments: [],
    liked: ["a", "b", "c", "d", "e"],
    postTime: new Date(),
  },
  {
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
    content: "Why are you reading these?",
    author: "abce123",
    comments: [],
    liked: ["a", "b", "c"],
    postTime: new Date(),
  },
  {
    content: "Hoot hoot",
    author: "abcd123",
    comments: [],
    liked: ["a", "b", "c", "d", "e", "f", "g", "h"],
    postTime: new Date(),
  },
];
