import { Link } from "react-router-dom"



function Navbar() {
  return (
    <nav>
      <Link to="/">DASHBOARD</Link>
      <Link to="/login">LOGIN</Link>
      <Link to="/signup">SIGNUP</Link>
      <Link to="/profile">PROFILE</Link>
      <Link to="/admin">ADMIN DASHBOARD</Link>
      <Link to="/users">USERS</Link>
      <Link to="/admin/tasks">ALL TASKS</Link>
    </nav>
  );
}



export default Navbar