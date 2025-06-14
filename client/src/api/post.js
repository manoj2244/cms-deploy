import axios from "axios";

const API = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL });

export const fetchPosts = () => API.get("/posts");
export const createPost = (data) => API.post("/posts", data);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const getPostById = async (id) => {
  const res = await API.get(`/posts/${id}`);
  return res.data;
};

export const updatePost = async (id, postData) => {
  const res = await API.put(`/posts/${id}`, postData);
  return res.data;
};
