import { BlogPost } from "@/lib/blog-storage";
import { BlogCard } from "./blog-card";

interface BlogListProps {
  posts: BlogPost[];
  activeCategory: string;
}

export function BlogList({
  posts,
  activeCategory,
}: BlogListProps) {
  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter(
          (post) => post.category === activeCategory
        );

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {filteredPosts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}