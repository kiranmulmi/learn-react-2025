import { NavLink } from "react-router";

const BlogRow = (props) => {
  return (
    <>
      { props.blogData && props.blogData.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td>{item.created}</td>
              <td>
                <button className="btn-danger">Delete</button> &nbsp;
                <NavLink to={`/admin/blog/edit/${item.id}`} className="btn-default">Edit</NavLink> &nbsp;
                <button className="btn-primary">View</button>
              </td>
            </tr>
          )
      })}
    </>
  )
}

export default BlogRow;