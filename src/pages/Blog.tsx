import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ScrollAnimator from "@/components/ScrollAnimator";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const blogPosts = [
  { title: "Growing Your Brand on Social Media", excerpt: "Strategies to build an engaged community across platforms.", image: blog1, date: "Feb 12, 2025" },
  { title: "Content That Converts", excerpt: "Why storytelling and data-driven content are the future of social media.", image: blog2, date: "Jan 28, 2025" },
  { title: "Mastering Short-Form Video", excerpt: "Tips for creating viral Reels and TikToks that drive real engagement.", image: blog3, date: "Dec 15, 2024" },
];

const Blog = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollTo = (dir: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = container.children[0]?.clientWidth || 320;
    const gap = 24;
    const newIndex = dir === "left"
      ? Math.max(0, currentIndex - 1)
      : Math.min(blogPosts.length - 1, currentIndex + 1);
    setCurrentIndex(newIndex);
    container.scrollTo({ left: newIndex * (cardWidth + gap), behavior: "smooth" });
  };

  return (
    <div className="space-y-12 pb-20">
      <ScrollAnimator>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">My Blog</h1>
      </ScrollAnimator>
      <ScrollAnimator delay={100}>
        <p className="text-muted-foreground max-w-2xl leading-relaxed">
          Welcome to my blog where I share thoughts on social media strategy, content creation, and the digital marketing landscape. I write about tools, workflows, and lessons learned from real campaigns. Dive in and feel free to reach out if something resonates with you.
        </p>
      </ScrollAnimator>

      <ScrollAnimator delay={200}>
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {blogPosts.map((post) => (
              <div key={post.title} className="flex-shrink-0 w-80 md:w-96 group">
                <div className="bg-card rounded-2xl overflow-hidden border border-border hover:navy-glow transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="font-display font-semibold text-foreground">{post.title}</h3>
                    <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                    <p className="text-xs text-muted-foreground/60">{post.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3 mt-6">
            <button onClick={() => scrollTo("left")} className="p-2 rounded-full border border-border text-muted-foreground hover:text-accent hover:border-accent transition-all">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scrollTo("right")} className="p-2 rounded-full border border-border text-muted-foreground hover:text-accent hover:border-accent transition-all">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </ScrollAnimator>

      <ScrollAnimator delay={300}>
        <div className="flex justify-center">
          <a
            href="https://yourblog.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-3 rounded-full border border-accent text-accent font-medium text-sm hover:bg-accent hover:text-accent-foreground hover:navy-glow transition-all duration-200"
          >
            Explore My Blog
          </a>
        </div>
      </ScrollAnimator>
    </div>
  );
};

export default Blog;
