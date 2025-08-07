import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getBlogById } from "../../services/blog";

const BlogForm = () => {
  const { id } = useParams();
  
  const [data, setData] = useState({
    title: '',
    content: '',
    author: localStorage.getItem('USER_EMAIL'),
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
  }, [])

  return (
    <div>
      { id && <h1>Edit Blog</h1>}
      { !id && <h1>Create Blog</h1>}

      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" value={data.title} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="content">Content</label>
        <div className="editor">
          <textarea id="content" name="content" rows="10" style={{width: "100%"}} onChange={handleChange} value={data.content}/>
        </div>
      </div>
      <div>
        <button className="btn-primary" onClick={() => {
          console.log(data);
        }}>Save</button>
      </div>
    </div>
  )
}

export default BlogForm;