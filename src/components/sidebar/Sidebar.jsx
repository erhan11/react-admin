import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">ErhanAdminPanel</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <DashboardIcon />
            <span>Dashboard</span>
          </li>
        </ul>
        <ul>
          <li>
            <span>Users</span>
          </li>
        </ul>
        <ul>
          <li>
            <span>Products</span>
          </li>
        </ul>
        <ul>
          <li>
            <span>Orders</span>
          </li>
        </ul>{" "}
        <ul>
          <li>
            <span>Delivery</span>
          </li>
        </ul>{" "}
        <ul>
          <li>
            <span>Stats</span>
          </li>
        </ul>{" "}
        <ul>
          <li>
            <span>Notifications</span>
          </li>
        </ul>{" "}
        <ul>
          <li>
            <span>System Health</span>
          </li>
        </ul>
        <ul>
          <li>
            <span>Logs</span>
          </li>
        </ul>{" "}
        <ul>
          <li>
            <span>Settings</span>
          </li>
        </ul>{" "}
        <ul>
          <li>
            <span>Profile</span>
          </li>
        </ul>{" "}
        <ul>
          <li>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">color options</div>
    </div>
  );
};

export default Sidebar;
