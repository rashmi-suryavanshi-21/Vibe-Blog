import React, { useState } from "react";
import API from "../../api/axios";
import { useNavigate } from "react-router-dom";

const BlogForm = () => {
  const [formdata, setFormdata] = useState({
    title: "",
    category: "",
    author: "",
    image: "",
    content: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/blogs", formdata);

      console.log(res.data);

      alert("Blog created successfully");

      navigate("/");
    } catch (error) {
      console.log(error);

      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 py-10 px-6">

      <div className="max-w-3xl mx-auto bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl p-10">

        <h2 className="text-4xl font-bold text-amber-400 mb-10 text-center">
          Create New Blog
        </h2>

        <form onSubmit={handleSubmit} className="space-y-7">

          {/* Title */}
          <div>
            <label className="block text-zinc-300 mb-2 font-medium text-left">
              Title
            </label>

            <input
              type="text"
              name="title"
              value={formdata.title}
              onChange={handleChange}
              placeholder="Enter blog title"
              required
              className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-400 text-left"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-zinc-300 mb-2 font-medium text-left">
              Category
            </label>

            <input
              type="text"
              name="category"
              value={formdata.category}
              onChange={handleChange}
              placeholder="Technology, AI, Creativity..."
              required
              className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-400 text-left"
            />
          </div>

          {/* Author */}
          <div>
            <label className="block text-zinc-300 mb-2 font-medium text-left">
              Author
            </label>

            <input
              type="text"
              name="author"
              value={formdata.author}
              onChange={handleChange}
              placeholder="Author name"
              required
              className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-400 text-left"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-zinc-300 mb-2 font-medium text-left">
              Image URL
            </label>

            <input
              type="url"
              name="image"
              value={formdata.image}
              onChange={handleChange}
              placeholder="Paste image URL"
              required
              className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-400 text-left"
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-zinc-300 mb-2 font-medium text-left">
              Content
            </label>

            <textarea
              name="content"
              value={formdata.content}
              onChange={handleChange}
              placeholder="Write your blog here..."
              required
              rows="8"
              className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
            ></textarea>
          </div>

          {/* Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-amber-400 hover:bg-amber-500 text-black font-bold py-3 rounded-xl transition duration-300"
            >
              Publish Blog
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default BlogForm;