import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col">

      <Navbar />

      {/* Hero Section */}
      <div className="flex-1 flex items-center justify-center px-6 py-20 relative overflow-hidden">

        {/* Background glow */}
        <div className="absolute w-[500px] h-[500px] bg-amber-500/10 blur-[150px] rounded-full top-[-100px] left-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-blue-500/10 blur-[140px] rounded-full bottom-[-100px] right-[-100px]" />

        {/* Content Card */}
        <div className="max-w-3xl text-center bg-zinc-900/60 border border-zinc-800 backdrop-blur-xl rounded-3xl p-10 shadow-2xl">

          <span className="inline-block px-4 py-1 mb-6 text-sm bg-amber-400/10 text-amber-400 border border-amber-400/20 rounded-full">
            About Platform
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            About <span className="text-amber-400">VibeBlogs</span>
          </h1>

          <p className="text-zinc-400 text-lg leading-8 mb-8">
            Vibe Blogs is a creative space where stories, thoughts, and
            experiences come alive. Built with modern MERN stack, it allows
            users to write, explore, and share meaningful content with the world.
          </p>

          <div className="border-t border-zinc-800 pt-6">
            <h3 className="text-xl font-semibold text-white">
              Made with <span className="text-red-400">❤️</span> by Rashmi Suryavanshi
            </h3>
            <p className="text-zinc-500 text-sm mt-2">
              A full-stack blogging experience built for learning & growth
            </p>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;