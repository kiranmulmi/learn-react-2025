import { useState } from "react";

const BlogForm = () => {

  const [data, setData] = useState({
    title: '',
    content: '',
    author: localStorage.getItem('USER_EMAIL'),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({...data,[name]: value});
  }

  return (
    <div>
      <h1>Blog Form</h1>

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