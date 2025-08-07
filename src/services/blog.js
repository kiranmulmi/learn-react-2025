import axios from 'axios';

export const getAllBlogs = () => {
  return new Promise((resolve) => {
    axios.get('http://localhost:4000/blogs')
    .then(function (response) {
      resolve(response.data);
    })
  });
}
/*

export const getAllBlogs = async () => {
  const response = await axios.get('http://localhost:4000/blogs');
  return response.data;
}

*/

export const getBlogById = async (id) => {
  const response = await axios.get(`http://localhost:4000/blogs/${id}`);
  return response.data;
}