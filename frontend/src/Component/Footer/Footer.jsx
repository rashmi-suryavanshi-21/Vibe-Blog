import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 mt-24">

      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-extrabold text-amber-400 mb-4">
              VibeBlogs
            </h2>

            <p className="text-zinc-400 leading-7">
              A modern blogging platform where creators share ideas,
              stories, and inspiration with the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3 text-zinc-400">

              <li>
                <Link to="/" className="hover:text-amber-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/add" className="hover:text-amber-400 transition">
                  Write Blog
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-amber-400 transition">
                  About
                </Link>
              </li>

            </ul>
          </div>

          {/* Social */}
<div className="flex flex-col items-center md:items-start">
  <h4 className="text-lg font-semibold text-white mb-5">
    Follow Us
  </h4>

  <div className="flex gap-6">

    <a
      href="#"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-amber-400 hover:border-amber-400 transition"
    >
      <FaInstagram />
    </a>

    <a
      href="#"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-amber-400 hover:border-amber-400 transition"
    >
      <FaTwitter />
    </a>

    <a
      href="#"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-amber-400 hover:border-amber-400 transition"
    >
      <FaLinkedin />
    </a>

  </div>
</div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 mt-12 pt-6 text-center">

          <p className="text-zinc-500 text-sm">
            © 2026 <span className="text-amber-400">VibeBlogs</span>. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;