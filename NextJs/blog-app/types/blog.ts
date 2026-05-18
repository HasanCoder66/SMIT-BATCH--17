// types/blog.ts
export interface BlogPost {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  featured: boolean;
}