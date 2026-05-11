import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";
import BlogForm from "../../Component/BlogForm/BlogForm";

const WriteBlog = () => {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col">

      <Navbar />

      <div className=" px-4 py-10">
        <BlogForm />
      </div>

      <Footer />

    </div>
  );
};

export default WriteBlog;