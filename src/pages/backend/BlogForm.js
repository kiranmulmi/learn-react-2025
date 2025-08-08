import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { createBlog, getBlogById } from "../../services/blog";

const BlogForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [data, setData] = useState({
    title: '',
    content: '',
    author: localStorage.getItem('USER_EMAIL'),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  });

  const [errors, setErrors] = useState({
    title: '',
    content: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({...data,[name]: value});
  }

  useEffect(() => {
    if (id) {
      getBlogById(id).then((response) => {
        setData(
          {
            ...data,
            title: response.title,
            content: response.content,
          }
        );
      });
    }
  }, []);

  const handleSubmit = () => {
    let hasError = false;
    let validationErrors = {
      title: '',
      content: '',
    };
    if (data.title.trim() === '') {
      validationErrors.title = 'Title is required';
      hasError = true;
    } 
    if (data.content.trim() === '') {
      validationErrors.content = 'Content is required';
      hasError = true;
    }

    setErrors(validationErrors);
    if (!hasError) {
      // FORM IS VALID
      createBlog(data)
        .then((response) => {
          navigate('/admin/blog');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log('has error');
    }
  }

  return (
    <div>
      { id && <h1>Edit Blog</h1>}
      { !id && <h1>Create Blog</h1>}
      <div className="blog-form">
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" value={data.title} onChange={handleChange} />
          {errors.title && <p className="error">{errors.title}</p>}
        </div>
        <br />
        <div>
          <label htmlFor="content">Content</label>
          <div className="editor">
            <textarea id="content" name="content" rows="10" style={{width: "100%"}} onChange={handleChange} value={data.content}/>
            {errors.content && <p className="error">{errors.content}</p>}
          </div>
        </div>
        <br />
        <div>
          <button className="btn-primary" onClick={handleSubmit}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default BlogForm;