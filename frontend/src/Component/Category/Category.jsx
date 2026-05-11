import React from "react";

const Category = ({ category, setCategory }) => {
  const categories = [
    "All",
    "Tech",
    "Lifestyle",
    "Travel",
    "Creativity",
  ];

  return (
    <div className="bg-zinc-950 py-8 px-6">

      <div className="max-w-7xl mx-auto flex flex-wrap gap-4 justify-center">

        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`px-6 py-3 rounded-full font-semibold transition duration-300 border
              
              ${
                category === item
                  ? "bg-amber-400 text-black border-amber-400 shadow-lg shadow-amber-400/20"
                  : "bg-zinc-900 text-zinc-300 border-zinc-700 hover:border-amber-400 hover:text-amber-400"
              }
            `}
          >
            {item}
          </button>
        ))}

      </div>
    </div>
  );
};

export default Category;