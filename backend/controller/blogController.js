import Blog from "../models/Blog.js";

export const createBlog = async (req, res) => {
  try {
    const { title, content, image, category, author } = req.body;

    const blog = await Blog.create({
      title,
      content,
      image,
      category,
      author,
      user: req.user._id,
    });

    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getBlogs = async (req, res) => {
  try {
    const search = req.query.search || "";

    const blogs = await Blog.find({
      $or: [
        { title: { $regex: search, $options: "i" } },
        { category: { $regex: search, $options: "i" } },
        { author: { $regex: search, $options: "i" } },
        { content: { $regex: search, $options: "i" } },
      ],
    })
      .populate("user", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getSingleBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate(
      "user",
      "name email"
    );

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    // Check blog exists
    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    // Ownership check
    if (blog.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        message: "Not authorized",
      });
    }

    // Update blog
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    // Check blog exists
    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    // Ownership check
    if (blog.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        message: "Not authorized",
      });
    }

    await blog.deleteOne();

    res.status(200).json({
      message: "Blog deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

