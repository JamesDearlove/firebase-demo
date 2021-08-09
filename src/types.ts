// Interfaces for what the data in Firestore and sampleData
// should look like.

export interface Post {
  content: string;
  author: string;
  authorId: string;
  liked: string[];
  comments?: Post[];
  postTime: Date;
}
