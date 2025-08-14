import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { deleteUser, getAllUsers } from "../../services/user";
import UserRow from "../../components/backend/UserRow";
const User = () => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    getAllUsers().then((response) => {
      setUsers(response);
    });
  }, []);

  const handleDelete = (id) => {
    deleteUser(id)
      .then((response) => {
        getAllUsers().then((response) => {
          setUsers(response);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <div>
        <div className="user-header">
            <h3>User</h3>
            <NavLink to="/admin/user/create" className="btn-primary">Add</NavLink>
        </div>
        <div className="user-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <UserRow userData={users} handleDelete={handleDelete}/>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default User;