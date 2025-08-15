import { useEffect, useState } from 'react';
import { Card } from 'antd';
import { getAllBlogs } from '../../services/blog';
function Home() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      const blogs = await getAllBlogs();
      setBlogs(blogs);
    }
    fetchBlogs();
  }, []);
  return (
    <Card title="Latest Blogs">
      {
        blogs.map((blog) => (
          <Card
            style={{ marginTop: 16 }}
            type="inner"
            title={blog.title}
            extra={<a href="#">More</a>}
          >
            {blog.content}
            <br />
            <br />
            <div>
              <i>
                Create by : {blog.author}, <i>{blog.created_at}</i>
              </i>
            </div>
          </Card>
        ))
      }
  </Card>
  );
}

export default Home;