export const revalidate = 420;
// export const dynamic = 'force-static';
// export const dynamic = 'force-dynamic';

interface Post {
  title: string;
  content: string;
  slug: string;
}

interface BlogProps {
  params: {
    slug: string;
  };
}

const fetchData = async () => {
  const res = await fetch('http://localhost:3000/api/content');
  const data = await res.json();
  return data;
};

const Blog = async ({ params }: BlogProps) => {
  const posts: Post[] = await fetchData();
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    return (
      <main>
        <h1>Post not found</h1>
      </main>
    );
  }

  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </main>
  );
};

export const generateStaticParams = async () => {
  const posts: Post[] = await fetchData();

  // array of objects with the param value
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export default Blog;
