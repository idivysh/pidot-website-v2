import BlogCard from "./blog-card";

export default function BlogList({
  posts,
  activeCategory,
}: any) {
  const filteredPosts =
  activeCategory === "All"
    ? posts
    : posts.filter(
        (post: any) =>
          post.category === activeCategory
      );
  return (
    <section className="space-y-12">
        {filteredPosts.length === 0 ? (
          <div className="py-20 text-center text-zinc-500">
            No posts available
          </div>
        ) : (
          filteredPosts.map((post: any, index: number) => (
        <BlogCard
            key={post.slug}
            post={post}
            isLast={index === filteredPosts.length - 1}
        />
        )))}
    </section>
  );
}