import { Routes, Route, Link } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import AdminDashboard from "./pages/AdminDashboard";
import Users from "./pages/Users";
import AllTasks from "./pages/AllTasks";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (

    <>

    <Navbar/>
    

    




    <Routes>
      <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute >}/>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/admin" element={<ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>} />
      <Route path="/users" element={<Users />} />
      <Route path="/admin/tasks" element={<AllTasks />} />
    </Routes>

    </>
  );
}

export default App;