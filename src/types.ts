// Interfaces for what the data in Firestore and sampleData
// should look like.

export interface Post {
  id: string;
  content: string;
  author: string;
  liked: string[];
  comments: Post[];
  postTime: Date;
}

export interface Author {
  id: string;
  name: string;
  imageUrl?: string;
}
