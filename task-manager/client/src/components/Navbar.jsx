import { Link } from "react-router-dom"
import "../App.css"



function Navbar() {
  return (
    <nav className="flex gap-4">
      <Link to="/">DASHBOARD</Link>
      <Link to="/login">LOGIN</Link>
      <Link to="/signup">SIGNUP</Link>
     
      <Link to="/admin">ADMIN DASHBOARD</Link>
      <Link to="/users">USERS</Link>
      <Link to="/admin/tasks">ALL TASKS</Link>
    </nav>
  );
}



export default Navbar