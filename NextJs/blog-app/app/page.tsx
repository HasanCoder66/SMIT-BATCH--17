import BlogCard from "@/components/card/blogCard";
import FeaturedSection from "@/components/featureBlogSection/FeaturedSection";
import Hero from "@/components/hero/hero";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { dummyPosts } from "@/data/posts";

import Image from "next/image";

export default function Home() {
  
  // 
  const featuredPost = dummyPosts.find(post => post.featured) || dummyPosts[0]
  const regularPosts = dummyPosts.filter(post => !post.featured)
  console.log("featured post -->",featuredPost);
  

  return (
   <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20">
   <Navbar />
<Hero />
{/* <FeaturedSection /> */}

<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Post */}
        {featuredPost && <FeaturedSection post={featuredPost} />}

        {/* Latest Articles Grid */}
        <section className="py-8">
          <h2 className="text-2xl font-bold tracking-tight mb-6">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </main>
   

   <Footer/>
   </div>
  );
}
