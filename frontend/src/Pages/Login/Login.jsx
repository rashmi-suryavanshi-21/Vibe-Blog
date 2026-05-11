import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../../api/axios";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", formData);

      login(res.data.user, res.data.token);

      alert("Login successful");
      navigate("/");
    } catch (error) {
      console.log(error);

      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 px-4">

      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-lg">

        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Welcome Back
        </h1>

        <p className="text-center text-zinc-400 mb-8">
          Login to continue writing blogs
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-amber-400 hover:bg-amber-500 text-black font-bold py-3 rounded-xl transition duration-300"
          >
            Login
          </button>

        </form>

        <p className="text-center text-zinc-400 mt-6 text-sm">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-amber-400 hover:underline">
            Signup
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;