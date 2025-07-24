import BlogRow from "../../components/backend/BlogRow";
import { NavLink } from "react-router";

const Blog = () => {
  const data = [
    {
      id: 1,
      title: 'blog 1',
      description: 'blog 1 description',
      author: 'admin',
      created: '2025-07-18'
    },
    {
      id: 2,
      title: 'blog 2',
      description: 'blog 2 description',
      author: 'admin',
      created: '2025-07-18'
    }
  ];
  return(
    <>
      <div>
        <div className="blog-header">
            <h3>Blog</h3>
            <NavLink to="/admin/blog/create" className="btn-primary">Add</NavLink>
        </div>
        <div className="blog-table">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Created</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <BlogRow blogData={data}/>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Blog;