import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../../api/axios";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: "",
    category: "",
    author: "",
  });

  // Fetch blog
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await API.get(`/blogs/${id}`);

        setFormData({
          title: res.data.title,
          content: res.data.content,
          image: res.data.image,
          category: res.data.category,
          author: res.data.author,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlog();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // ONLY send editable fields
      const updatedData = {
        title: formData.title,
        content: formData.content,
        image: formData.image,
      };

      await API.put(`/blogs/${id}`, updatedData);

      alert("Blog updated successfully");
      navigate(`/blog/${id}`);
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 py-12 px-6">

      <div className="max-w-3xl mx-auto bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl p-10">

        <h1 className="text-4xl font-bold text-white mb-10 text-center">
          Edit Blog
        </h1>

        <form onSubmit={handleSubmit} className="space-y-7">

          {/* Title */}
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 text-white"
            placeholder="Title"
          />

          {/* Image */}
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 text-white"
            placeholder="Image URL"
          />

          {/* Content */}
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows="8"
            className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 text-white resize-none"
            placeholder="Content"
          />

          {/* READ ONLY INFO (optional but clean UI) */}
          <div className="text-sm text-zinc-500 space-y-1">
            <p>Category: {formData.category}</p>
            <p>Author: {formData.author}</p>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-amber-400 hover:bg-amber-500 text-black font-bold py-3 rounded-xl"
          >
            Update Blog
          </button>

        </form>

      </div>
    </div>
  );
};

export default EditBlog;