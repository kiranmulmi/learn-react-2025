import { NavLink } from "react-router";

const UserRow = (props) => {
  return (
    <>
      { props.userData && props.userData.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>
                <button className="btn-danger" onClick={() => props.handleDelete(item.id)}>Delete</button> &nbsp;
                <NavLink to={`/admin/user/edit/${item.id}`} className="btn-default">Edit</NavLink> &nbsp;
              </td>
            </tr>
          )
      })}
    </>
  )
}

export default UserRow;