import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import WebIcon from "@mui/icons-material/Web";
import { NavLink, Outlet } from "react-router";
import Profile from "../components/Profile";

const Header = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-green-500 to-green-300">
    <div className="absolute w-3/4 m-auto h-3/4 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-transparent">
      <ul className="fixed flex flex-col gap-4 w-fit bg-white p-4 rounded-2xl">
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              color: isActive ? "#78CC6D" : "gray",
              textDecoration: "none",
            })}
            className="flex items-center flex-col uppercase font-bold tracking-tight text-sm hover:text-green-500"
          >
            <AccountCircleOutlinedIcon />
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skill"
            style={({ isActive }) => ({
              color: isActive ? "#78CC6D" : "gray",
              textDecoration: "none",
            })}
            className="flex items-center flex-col uppercase font-bold tracking-tight text-sm hover:text-green-500"
          >
            <WebIcon />
            Skill
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/project"
            style={({ isActive }) => ({
              color: isActive ? "#78CC6D" : "gray",
              textDecoration: "none",
            })}
            className="flex items-center flex-col uppercase font-bold tracking-tight text-sm hover:text-green-500"
          >
            <AccountTreeIcon />
            Project
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            style={({ isActive }) => ({
              color: isActive ? "#78CC6D" : "gray",
              textDecoration: "none",
            })}
            className="flex items-center flex-col uppercase font-bold tracking-tight text-sm hover:text-green-500"
          >
            <ChatOutlinedIcon />
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              color: isActive ? "#78CC6D" : "gray",
              textDecoration: "none",
            })}
            className="flex items-center flex-col uppercase font-bold tracking-tight text-sm hover:text-green-500"
          >
            <AlternateEmailOutlinedIcon />
            Contact
          </NavLink>
        </li>
      </ul>
      <Profile />
      <Outlet />
    </div>
    </div>
  );
};

export default Header;
