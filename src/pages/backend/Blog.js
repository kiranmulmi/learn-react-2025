import { useEffect, useState } from "react";
import BlogRow from "../../components/backend/BlogRow";
import { NavLink } from "react-router";
import { getAllBlogs } from "../../services/blog";

const Blog = () => {

  const [blogs, setBlogs] = useState([]);
  
  useEffect(() => {
    getAllBlogs().then((response) => {
      setBlogs(response);
    });
  }, []);

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
              <BlogRow blogData={blogs}/>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Blog;