import { useEffect, useState } from "react";
import { fetchPosts, deletePost } from "../api/post";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data } = await fetchPosts();
        setPosts(data);
      } catch (err) {
        console.error("Failed to fetch posts", err);
      }
    };

    getPosts();
  }, []);

 const handleDelete = async (id) => {
  const confirm = window.confirm("Are you sure you want to delete this post?");
  if (!confirm) return;

  try {
    await deletePost(id);
    toast.success("Post deleted successfully!");

    // Optionally refresh posts after deletion
    setPosts((prev) => prev.filter((post) => post._id !== id));
  } catch (error) {
    console.error(error);
    toast.error("Failed to delete the post.");
  }
};
 

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">All Blog Posts</h2>
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-3">Title</th>
              <th className="text-left p-3">Content</th>
              <th className="text-left p-3">Date</th>
              <th className="text-left p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post._id} className="border-t">
                <td className="p-3">{post.title}</td>
                <td className="p-3">
                  {post.content.length > 50
                    ? post.content.slice(0, 50) + "..."
                    : post.content}
                </td>
                <td className="p-3">
                  {format(new Date(post.createdAt), "yyyy-MM-dd")}
                </td>
                <td className="p-3 space-x-2">
                 {/* <button
  onClick={() => navigate(`/edit/${post._id}`)}
  className="px-3 py-1 bg-sky-500 hover:bg-sky-600 rounded text-white text-sm"
>
  Edit
</button> */}
<button
  onClick={() => navigate(`/admin/edit/${post._id}`)}
  className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded text-sm"
>
  Edit
</button>

                  <button
                    onClick={() => handleDelete(post._id)}
                    className="px-3 py-1 bg-red-500 hover:bg-red-600 rounded text-white text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {posts.length === 0 && (
              <tr>
                <td colSpan="4" className="p-4 text-center text-gray-500">
                  No posts available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
