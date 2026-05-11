import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../../api/axios";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
const ShowBlog = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);

  const currentUser = JSON.parse(localStorage.getItem("user"));

  const isOwner = currentUser?.id === blog?.user?._id;

  const handleDelete = async () => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this blog?"
      );

      if (!confirmDelete) return;

      await API.delete(`/blogs/${blog._id}`);

      alert("Blog deleted successfully");

      navigate("/");
    } catch (error) {
      console.log(error);

      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await API.get(`/blogs/${id}`);

        setBlog(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <p className="text-zinc-400 text-xl">
          Loading...
        </p>
      </div>
    );
  }

  return (
   <>
   <Navbar />
    <div className="min-h-screen bg-zinc-950 py-12 px-6">

      <div className="max-w-4xl mx-auto bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">

        {/* Image */}
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[400px] object-cover"
        />

        {/* Content */}
        <div className="p-8">

          <div className="flex items-center justify-between mb-6">

            <span className="bg-amber-400 text-black px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">
              {blog.category}
            </span>

            <span className="text-zinc-400 text-sm">
              {blog.date}
            </span>

          </div>

          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            {blog.title}
          </h1>

          <p className="text-zinc-300 text-lg leading-8 mb-10 whitespace-pre-line">
            {blog.content}
          </p>

          <div className="flex items-center justify-between flex-wrap gap-4">

            <h3 className="text-zinc-400 text-lg">
              Author:
              <span className="text-white font-semibold ml-2">
                {blog.author}
              </span>
            </h3>

            {isOwner && (
              <div className="flex gap-4">

                <button
                  onClick={() => navigate(`/edit/${blog._id}`)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-xl font-semibold transition duration-300"
                >
                  Edit Blog
                </button>

                <button
                  onClick={handleDelete}
                  className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl font-semibold transition duration-300"
                >
                  Delete Blog
                </button>

              </div>
            )}

          </div>
        </div>
      </div>
    </div>

    <Footer />
   </>
  );
};

export default ShowBlog;