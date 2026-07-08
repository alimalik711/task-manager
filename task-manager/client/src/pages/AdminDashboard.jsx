import { Link } from "react-router-dom";

function AdminDashboard() {

    return (

        <div>

            <h1>Admin Dashboard</h1>

            <Link to="/users">
                Manage Users
            </Link>

            <br />

            <Link to="/admin/tasks">
                Manage Tasks
            </Link>

        </div>

    );

}

export default AdminDashboard;