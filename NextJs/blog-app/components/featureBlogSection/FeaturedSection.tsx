import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BlogPost } from "@/types/blog";

export default function FeaturedSection({ post }: { post: BlogPost }) {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold tracking-tight mb-6">Featured Article</h2>
      <Link href={`/blog/${post.id}`} className="group block overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 lg:p-8">
          <div className="lg:col-span-7 relative aspect-[16/9] lg:aspect-auto overflow-hidden rounded-xl">
            <img 
              src={post.image} 
              alt={post.title} 
              className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="lg:col-span-5 flex flex-col justify-center">
            <Badge className="w-fit mb-4" variant="secondary">{post.category}</Badge>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 group-hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </h3>
            <p className="text-muted-foreground mb-6 line-clamp-3">{post.description}</p>
            <div className="flex items-center gap-3 mt-auto">
              <Avatar className="h-9 w-9">
                <AvatarImage src={post.author.avatar} />
                <AvatarFallback>{post.author.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{post.author.name}</p>
                <p className="text-xs text-muted-foreground">{post.date}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}