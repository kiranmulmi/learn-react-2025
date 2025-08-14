import axios from 'axios';
import { sha256 } from '../utils/encryption';

export const getAllUsers = () => {
  return new Promise((resolve) => {
    axios.get('http://localhost:4000/users')
    .then(function (response) {
      resolve(response.data);
    })
  });
}
/*

export const getAllUsers = async () => {
  const response = await axios.get('http://localhost:4000/users');
  return response.data;
}

*/

export const getUserById = async (id) => {
  const response = await axios.get(`http://localhost:4000/users/${id}`);
  return response.data;
}

export const createUser = async (userData) => {
  try {
    userData.password = await sha256(userData.password);
    const response = await axios.post('http://localhost:4000/users', userData);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const updateUser = async (id, userData) => {
  try {
    if(userData.password === '') {
      delete userData.password;
    }
    const response = await axios.patch(`http://localhost:4000/users/${id}`,
      userData
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:4000/users/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}