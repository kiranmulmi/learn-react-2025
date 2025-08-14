import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { createUser, getUserById, updateUser } from "../../services/user";

const UserForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({...data,[name]: value});
  }

  useEffect(() => {
    if (id) {
      getUserById(id).then((response) => {
        setData(
          {
            ...data,
            name: response.name,
            email: response.email,
            password: response.password,
            phone: response.phone,
          }
        );
      });
    }
  }, []);

  const handleSubmit = () => {
    let hasError = false;
    let validationErrors = {
      name: '',
      email: '',
      password: '',
      phone: '',
    };
    if (data.name.trim() === '') {
      validationErrors.name = 'Name is required';
      hasError = true;
    } 
    if (data.email.trim() === '') {
      validationErrors.email = 'Email is required';
      hasError = true;
    }
    if (data.password.trim() === '') {
      validationErrors.password = 'Password is required';
      hasError = true;
    }
    if (data.phone.trim() === '') {
      validationErrors.phone = 'Phone is required';
      hasError = true;
    }

    setErrors(validationErrors);
    if (!hasError) {
      // FORM IS VALID
      if(id) {
        // UPDATE USER
        updateUser(id, data)
          .then((response) => {
            navigate('/admin/user');
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        // CREATE USER
        createUser(data)
        .then((response) => {
          navigate('/admin/user');
        })
        .catch((error) => {
          console.log(error);
        }); 
      }
    } else {
      console.log('has error');
    }
  }

  return (
    <div>
      { id && <h1>Edit User</h1>}
      { !id && <h1>Create User</h1>}
      <div className="user-form">
        <div>
          <label htmlFor="name">Full Name</label>
          <input type="text" id="title" name="name" value={data.name} onChange={handleChange} />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <br />
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" value={data.email} onChange={handleChange} />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <br />
        {!id &&
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={data.password} onChange={handleChange} />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
        }
        <br />
        <div>
          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" name="phone" value={data.phone} onChange={handleChange} />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>
        <br />
        <div>
          <button className="btn-primary" onClick={handleSubmit}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default UserForm;