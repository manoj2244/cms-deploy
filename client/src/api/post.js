import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const fetchPosts = () => API.get("/posts");
export const createPost = (data) => API.post("/posts", data);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const getPostById = async (id) => {
  const res = await axios.get(`http://localhost:5000/api/posts/${id}`);
  return res.data;
};

export const updatePost = async (id, postData) => {
  const res = await axios.put(`http://localhost:5000/api/posts/${id}`, postData);
  return res.data;
};
