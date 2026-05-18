// data/posts.ts
import { BlogPost } from "@/types/blog";

export const dummyPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Web Development: Next.js 16 and Beyond",
    description: "Explore the upcoming features in Next.js, advanced rendering strategies, and how AI is transforming front-end workflows.",
    category: "Technology",
    date: "May 15, 2026",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600",
    author: { name: "Zeeshan Ahmed", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100" },
    featured: false,
  },
  {
    id: "2",
    title: "Mastering Tailwind CSS for Premium UI Design",
    description: "Learn how to build jaw-dropping user interfaces using advanced Tailwind techniques, custom animations, and design tokens.",
    category: "Design",
    date: "May 12, 2026",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600",
    author: { name: "Sara Khan", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100" },
    featured: false,
  },
  {
    id: "3",
    title: "TypeScript Tips Every Developer Should Know",
    description: "Boost your productivity and catch bugs early with these advanced TypeScript utility types and best practices.",
    category: "Coding",
    date: "May 10, 2026",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600",
    author: { name: "Ali Raza", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100" },
    featured: true,
  },
];