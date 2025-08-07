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
                <button>Delete</button>
                <NavLink to={`/admin/blog/edit/${item.id}`}>Edit</NavLink>
                <button>View</button>
              </td>
            </tr>
          )
      })}
    </>
  )
}

export default BlogRow;