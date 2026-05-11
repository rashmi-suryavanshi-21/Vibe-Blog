import React, { useEffect, useState } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Category from "../../Component/Category/Category";
import BlogCard from "../../Component/BlogCard/BlogCard";
import Footer from "../../Component/Footer/Footer";
import { Link } from "react-router-dom";
import API from "../../api/axios";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

const featuredBlog =
  blogs[Math.floor(Math.random() * blogs.length)];

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await API.get(`/blogs?search=${search}`);

        setBlogs(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [search]);

  useEffect(() => {
    const testProtected = async () => {
      try {
        const res = await API.get("/protected");
        console.log(res.data);
      } catch (error) {
        console.log("ERROR:", error.message);
        console.log("RESPONSE:", error.response);

        alert(
          error.response?.data?.message ||
          "Protected route failed"
        );
      }
    };

    testProtected();
  }, []);

  const filteredBlogs =
    category === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === category);

  return (
    <div className="bg-zinc-950 min-h-screen">

      <Navbar />
      {/* Hero Section */}
<section className="max-w-7xl mx-auto px-6 py-20">

  <div className="grid lg:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <div>

      <span className="inline-block bg-amber-400/10 text-amber-400 border border-amber-400/20 px-5 py-2 rounded-full text-sm font-semibold mb-6">
        Modern Blogging Platform
      </span>

      <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
        Share Your
        <span className="text-amber-400"> Ideas </span>
        With The World
      </h1>

      <p className="text-zinc-400 text-lg leading-8 mb-8 max-w-xl">
        Turn your thoughts into engaging stories, connect with readers,
        and create meaningful content with VibeBlogs.
      </p>

      {/* Search */}
      <div className="relative mb-6 max-w-xl">

        <input
          type="text"
          placeholder="Search blogs, topics, categories..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
            w-full
            bg-zinc-900
            border border-zinc-800
            text-white
            px-6
            py-4
            rounded-2xl
            focus:outline-none
            focus:border-amber-400
            focus:ring-2
            focus:ring-amber-400/20
            transition
            text-lg
            shadow-xl
          "
        />

      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4">

        <Link to="/add">
          <button className="bg-amber-400 hover:bg-amber-500 text-black font-bold px-8 py-4 rounded-2xl text-lg transition duration-300 shadow-lg shadow-amber-400/20">
            Start Writing
          </button>
        </Link>

        <button
  onClick={() => {
    document.getElementById("blogs")?.scrollIntoView({ behavior: "smooth" });
  }}
  className="border border-zinc-700 hover:border-zinc-500 text-white px-8 py-4 rounded-2xl text-lg transition"
>
  Explore Blogs
</button>
      </div>

    </div>

    {/* RIGHT VISUAL */}
    <div className="relative hidden lg:flex justify-center">

      {/* Glow */}
      <div className="absolute w-96 h-96 bg-amber-400/20 blur-3xl rounded-full"></div>
    {featuredBlog && (
  <div className="relative bg-zinc-900 border border-zinc-800 rounded-3xl p-6 w-full max-w-md shadow-2xl">

    <img
      src={featuredBlog.image}
      alt={featuredBlog.title}
      className="rounded-2xl mb-5 h-56 w-full object-cover"
    />

    <span className="text-amber-400 text-sm font-semibold">
      Featured Article
    </span>

    <h2 className="text-2xl font-bold text-white mt-2 mb-3">
      {featuredBlog.title}
    </h2>

    <p className="text-zinc-400 leading-7">
      {featuredBlog.content?.slice(0, 120)}...
    </p>

    <div className="flex items-center justify-between mt-6">

      <div>
        <p className="text-white font-semibold">
          {featuredBlog.author}
        </p>
        <p className="text-zinc-500 text-sm">Author</p>
      </div>

      <span className="bg-amber-400/10 text-amber-400 px-4 py-2 rounded-xl text-sm">
        {featuredBlog.category}
      </span>

    </div>

    <Link to={`/blog/${featuredBlog._id}`}>
      <button className="mt-5 text-amber-400 hover:underline">
        Read full story →
      </button>
    </Link>

  </div>
)}
    </div>
  </div>


</section>


      {/* Categories */}
      <Category
        category={category}
        setCategory={setCategory}
      />


      {/* Blog Section */}
      <section id="blogs"  className="pb-19">

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <p className="text-zinc-400 text-xl animate-pulse">
              Loading blogs...
            </p>
          </div>
        ) : filteredBlogs.length > 0 ? (
          <BlogCard blogs={filteredBlogs} />
        ) : (
          <div className="flex justify-center items-center py-20">
            <p className="text-zinc-500 text-xl">
              No blogs found.
            </p>
          </div>
        )}

      </section>

      <Footer />
    </div>
  );
};

export default Home;