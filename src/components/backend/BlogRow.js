import { NavLink } from "react-router";

const BlogRow = (props) => {
  return (
    <>
      { props.blogData && props.blogData.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td>{item.created_at}</td>
              <td>
                <button className="btn-danger" onClick={() => props.handleDelete(item.id)}>Delete</button> &nbsp;
                <NavLink to={`/admin/blog/edit/${item.id}`} className="btn-default">Edit</NavLink> &nbsp;
              </td>
            </tr>
          )
      })}
    </>
  )
}

export default BlogRow;