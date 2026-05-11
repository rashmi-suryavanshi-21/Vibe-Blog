import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blogs = [] }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {blogs.length > 0 ? (
          blogs.map((data) => (
            <Link key={data._id} to={`/blog/${data._id}`} className="group">

              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-md hover:shadow-amber-400/10 transition duration-300 h-full flex flex-col">

                {/* IMAGE */}
                <div className="relative overflow-hidden">

                  <img
                    src={data.image}
                    alt={data.title}
                    className="w-full h-60 object-cover group-hover:scale-105 transition duration-500"
                  />

                  {/* category badge */}
                  <span className="absolute top-3 left-3 bg-amber-400/90 text-black text-xs font-bold px-3 py-1 rounded-full">
                    {data.category}
                  </span>

                </div>

                {/* CONTENT */}
                <div className="p-5 flex flex-col gap-3 flex-1">

                  {/* title */}
                  <h3 className="text-white font-bold text-xl line-clamp-2 group-hover:text-amber-400 transition">
                    {data.title}
                  </h3>

                  {/* preview text */}
                  <p className="text-zinc-400 text-sm line-clamp-3">
                    {data.content?.slice(0, 100)}...
                  </p>

                  {/* footer */}
                  <div className="mt-auto pt-4 border-t border-zinc-800 flex justify-between items-center">

                    <div>
                      <p className="text-white text-sm font-semibold">
                        {data.author}
                      </p>

                      <p className="text-zinc-500 text-xs">
                        Author
                      </p>
                    </div>
                    <p className="text-zinc-500 text-xs">
                      {new Date(data.createdAt).toLocaleDateString()}
                    </p>

                  </div>

                </div>

              </div>

            </Link>
          ))
        ) : (
          <p className="text-zinc-500">No blogs available</p>
        )}

      </div>
    </div>
  );
};

export default BlogCard;