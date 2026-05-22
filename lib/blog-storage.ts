export const getBlogs = () => {

  if (typeof window === "undefined") {
    return [];
  }

  const blogs =
    localStorage.getItem("blogs");

  return blogs ? JSON.parse(blogs) : [];
};

export const saveBlog = (blog: any) => {

  const existingBlogs = getBlogs();

  const updatedBlogs = [
    blog,
    ...existingBlogs,
  ];

  localStorage.setItem(
    "blogs",
    JSON.stringify(updatedBlogs)
  );
};

export const deleteBlog = (slug: string) => {

  const existingBlogs = getBlogs();

  const updatedBlogs =
    existingBlogs.filter(
      (blog: any) =>
        blog.slug !== slug
    );

  localStorage.setItem(
    "blogs",
    JSON.stringify(updatedBlogs)
  );
};

export const updateBlog = (
  slug: string,
  updatedData: any
) => {

  const existingBlogs = getBlogs();

  const updatedBlogs =
    existingBlogs.map((blog: any) => {

      if (blog.slug === slug) {

        return {
          ...blog,
          ...updatedData,
        };
      }

      return blog;
    });

  localStorage.setItem(
    "blogs",
    JSON.stringify(updatedBlogs)
  );
};