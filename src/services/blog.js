export const getAllBlogs = () => {
  const data = [
    {
      id: 1,
      title: 'blog 1',
      content: 'blog 1 description',
      author: 'admin',
      created: '2025-07-18'
    },
    {
      id: 2,
      title: 'blog 2',
      content: 'blog 2 description',
      author: 'admin',
      created: '2025-07-18'
    }
  ]
  return data;
}

export const getBlogById = (id) => {
  const blogs = getAllBlogs();
  const blog = blogs.find((x) => x.id === parseInt(id));
  return blog;
}