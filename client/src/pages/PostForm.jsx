import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createPost, getPostById, updatePost } from "../api/post";

const PostForm = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      if (id) {
        try {
          const response = await getPostById(id);
          setTitle(response.title);
          setContent(response.content);
        } catch (err) {
          console.error("Error fetching post:", err);
        }
      } else {
        
        setTitle("");
        setContent("");
      }
    };

    fetchPost();
  }, [id]); // ← This runs again when switching from edit to create

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { title, content };

    try {
      if (id) {
        await updatePost(id, newPost);
        alert("Post updated successfully!");
      } else {
        await createPost(newPost);
        alert("Post created successfully!");
      }

      navigate("/admin/dashboard");
    } catch (error) {
      console.error("Error saving post:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">
        {id ? "Edit Post" : "Create New Post"}
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="border px-4 py-2 rounded"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className="border px-4 py-2 rounded min-h-[150px]"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {id ? "Update Post" : "Add Blog"}
        </button>
      </form>
    </div>
  );
};

export default PostForm;
