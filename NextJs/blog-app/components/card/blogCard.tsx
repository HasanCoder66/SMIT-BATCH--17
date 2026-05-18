import Link from "next/link";
import { BlogPost } from "@/types/blog";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.id}`} className="group block">
      <Card className="h-full overflow-hidden border-border bg-card/40 backdrop-blur-sm hover:border-primary/30 group-hover:shadow-md transition-all duration-300 flex flex-col">
        <CardHeader className="p-0 overflow-hidden aspect-[16/10] relative">
          <img 
            src={post.image} 
            alt={post.title} 
            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
          />
        </CardHeader>
        <CardContent className="p-5 flex-1">
          <Badge className="mb-3" variant="outline">{post.category}</Badge>
          <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{post.description}</p>
        </CardContent>
        <CardFooter className="p-5 pt-0 flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src={post.author.avatar} />
            <AvatarFallback>{post.author.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-xs font-medium">{post.author.name}</p>
            <p className="text-[10px] text-muted-foreground">{post.date}</p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}