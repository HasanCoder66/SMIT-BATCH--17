"use strict";
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold tracking-tight bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              DEV.BLOG
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Home</Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Articles</Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Tutorials</Link>
            <Button size="sm" className="gap-1">Subscribe <ArrowUpRight className="h-4 w-4" /></Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-muted-foreground hover:text-foreground">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-border bg-background px-4 pt-2 pb-4 space-y-2">
          <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:bg-accent hover:text-foreground">Home</Link>
          <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:bg-accent hover:text-foreground">Articles</Link>
          <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:bg-accent hover:text-foreground">Tutorials</Link>
          <Button className="w-full mt-2">Subscribe</Button>
        </div>
      )}
    </nav>
  );
}