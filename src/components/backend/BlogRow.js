const BlogRow = (props) => {
  return (
    <>
      { props.blogData.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td>{item.created}</td>
              <td>
                <button>Delete</button>
                <button>Edit</button>
                <button>View</button>
              </td>
            </tr>
          )
      })}
    </>
  )
}

export default BlogRow;