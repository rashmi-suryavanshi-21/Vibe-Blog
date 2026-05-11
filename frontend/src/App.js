
import './App.css';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import BlogForm from './Component/BlogForm/BlogForm';
import ShowBlog from './Component/ShowBlog/ShowBlog'
import EditBlog from "./Component/EditBlog/EditBlog";
import About from './Pages/About/About';
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import WriteBlog from "./Pages/WriteBlog/WriteBlog";
import ProtectedRoute from "./Component/ProtectedRoute/ProtectedRoute";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route
          path="/add"
          element={
            <ProtectedRoute>
              <WriteBlog  />
            </ProtectedRoute>
          }
        />
        <Route path='/blog/:id' element={<ShowBlog />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blogs" element={<Home />} />
        <Route
          path="/edit/:id"
          element={
            <ProtectedRoute>
              <EditBlog />
            </ProtectedRoute>
          }
        />
      </Routes>

    </div>
  );
}

export default App;
