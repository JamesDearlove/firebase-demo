export interface Post {
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
