import React from "react";
import "../CSS/sidebar.css";
import {
  FiPlus,
  FiCalendar,
  FiCalendarWeek,
  FiList,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { MdOutlineToday, MdOutlineCalendarToday } from "react-icons/md";
// import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li>
          <a href="#">
            <CgProfile />
            <span>Profile</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FiPlus />
            <span>Add new task</span>
          </a>
        </li>
        <li>
          <a href="#">
            <MdOutlineToday />
            <span>Today</span>
          </a>
        </li>
        <li>
          <a href="#">
            <MdOutlineCalendarToday />
            <span>This week</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FiList />
            <span>All</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FiSettings />
            <span>Settings</span>
          </a>
        </li>
        <li className="logout">
          <a href="#">
            <FiLogOut />
            <span>Log out</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
