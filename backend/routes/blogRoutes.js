import express from "express";

import {
  createBlog,
  getBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
} from "../controller/blogController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// routes
router.get("/", getBlogs);
router.get("/:id", getSingleBlog);

router.post("/", protect, createBlog);
router.put("/:id", protect, updateBlog);
router.delete("/:id", protect, deleteBlog);

export default router;