export interface BlogPost {
  id: string;

  slug: string;
  title: string;
  excerpt: string;

  image: string;

  category: string;
  college: string;
  
  authorImage?: string;
  author: string;

  readTime: string;

  featured?: boolean;

  showOnBlogPage: boolean;

  createdAt: string;

  content: any[];

  challenge?: string;
  solution?: string;
  outcome?: string;

  stats?: {
    label: string;
    value: string;
  }[];

  gallery?: string[];
}

const STORAGE_KEY = "pidot_blogs";

/* -------------------------------- */
/* SEED BLOGS (FIRST LOAD ONLY) */
/* -------------------------------- */

const seedBlogs: BlogPost[] = [
  {
    id: "1",

    slug: "welcome-blog",

    title: "Welcome Blog",

    excerpt:
      "This is the first blog available on the platform.",

    image: "/blogs/mit.jpg",

    category: "General",

    college: "",

    author: "Admin",
    authorImage: "/blog/roy.jpg",

    readTime: "2 Min Read",

    featured: true,

    showOnBlogPage: true,

    createdAt: new Date().toISOString(),

    content: [
      {
        type: "heading",
        text: "Welcome to the Blog Platform",
      },

      {
        type: "paragraph",
        text:
          "This is a sample blog created to demonstrate the blogging system.",
      },
    ],
  },
];

/* -------------------------------- */
/* GET BLOGS */
/* -------------------------------- */

export function getBlogs(): BlogPost[] {
  if (typeof window === "undefined") {
    return seedBlogs;
  }

  const storedBlogs =
    localStorage.getItem(STORAGE_KEY);

  if (!storedBlogs) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(seedBlogs)
    );

    return seedBlogs;
  }

  return JSON.parse(storedBlogs);
}

/* -------------------------------- */
/* SAVE BLOG */
/* -------------------------------- */

export function saveBlog(
  blog: BlogPost
) {
  const blogs = getBlogs();

  blogs.unshift(blog);

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(blogs)
  );
}

/* -------------------------------- */
/* UPDATE BLOG */
/* -------------------------------- */

export function updateBlog(
  slug: string,
  updates: Partial<BlogPost>
) {
  const blogs = getBlogs();

  const updatedBlogs = blogs.map(
    (blog) =>
      blog.slug === slug
        ? {
            ...blog,
            ...updates,
          }
        : blog
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedBlogs)
  );
}

/* -------------------------------- */
/* DELETE BLOG */
/* -------------------------------- */

export function deleteBlog(
  slug: string
) {
  const blogs = getBlogs();

  const updatedBlogs =
    blogs.filter(
      (blog) =>
        blog.slug !== slug
    );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedBlogs)
  );
}

/* -------------------------------- */
/* GET BLOG BY SLUG */
/* -------------------------------- */

export function getBlogBySlug(
  slug: string
): BlogPost | undefined {
  const blogs = getBlogs();

  return blogs.find(
    (blog) =>
      blog.slug === slug
  );
}

/* -------------------------------- */
/* GET PUBLIC BLOGS */
/* -------------------------------- */

export function getVisibleBlogs() {
  return getBlogs()
    .filter(
      (blog) =>
        blog.showOnBlogPage
    )
    .sort(
      (a, b) =>
        new Date(
          b.createdAt
        ).getTime() -
        new Date(
          a.createdAt
        ).getTime()
    );
}

/* -------------------------------- */
/* FEATURE BLOG */
/* -------------------------------- */

export function setFeaturedBlog(
  slug: string
) {
  const blogs = getBlogs();

  const updatedBlogs = blogs.map(
    (blog) => ({
      ...blog,
      featured:
        blog.slug === slug,
    })
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedBlogs)
  );
}