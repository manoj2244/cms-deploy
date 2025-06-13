import Post from "../models/Post.js";

// GET all posts
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// CREATE post
export const createPost = async (req, res) => {
  const { title, content } = req.body;
  try {
    const newPost = new Post({ title, content });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ message: "Failed to create post" });
  }
};

// UPDATE post
export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const updated = await Post.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: "Failed to update post" });
  }
};

// DELETE post
export const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    await Post.findByIdAndDelete(id);
    res.json({ message: "Post deleted" });
  } catch (error) {
    res.status(400).json({ message: "Failed to delete post" });
  }
};
export const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ error: "Invalid post ID" });
  }
};
