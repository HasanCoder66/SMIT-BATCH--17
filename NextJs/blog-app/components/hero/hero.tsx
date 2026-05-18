import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32 bg-dot-grid">
      <div className="max-w-4xl mx-auto text-center px-4">
        <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium bg-primary/10 text-primary mb-6 animate-pulse">
          ✨ Welcome to the future of blogging
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text">
          Stay Ahead in the <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Digital Age</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Deep dives into modern web frameworks, UI/UX insights, and clean code paradigms. Written by developers, for developers.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="shadow-lg shadow-indigo-500/20">Explore Blogs</Button>
          <Button size="lg" variant="outline">Learn More</Button>
        </div>
      </div>
    </section>
  );
}