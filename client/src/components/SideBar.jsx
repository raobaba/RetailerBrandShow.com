import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import InstaShort from "../assets/InstaShort.png";
import { GrHomeRounded } from "react-icons/gr";
import { BsSearch } from "react-icons/bs";
import { MdOutlineExplore } from "react-icons/md";
import { BsFillSendFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { VscDiffAdded } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";

function SideBar() {
  const navigationItems = [
    { to: "/", icon: <GrHomeRounded />, label: "Home" },
    { to: "/search", icon: <BsSearch />, label: "Search" },
    { to: "/explore", icon: <MdOutlineExplore />, label: "Explore" },
    { to: "/reels", icon: <FaPlay />, label: "Reels" },
    { to: "/messages", icon: <BsFillSendFill />, label: "Messages" },
    { to: "/notifications", icon: <FaRegHeart />, label: "Notifications" },
    { to: "/create", icon: <VscDiffAdded />, label: "Create" },
    { to: "/profile", icon: <CgProfile />, label: "Profile" },
    { to: "/more", icon: <FiMenu />, label: "More" },
  ];

  return (
    <div className="sidebar">
      <NavLink to="/" className="logo-contain">
        <img
          src={InstaShort}
          className="instaShort"
          alt="instashort-logo"
          width={25}
          height={25}
        />
        <h2 className="logo">InstaShort</h2>
      </NavLink>

      {navigationItems.map((item, index) => (
        <NavLink
          key={index}
          to={item.to}
          className="sidebar-item"
          activeClassName="active"
        >
          {item.icon &&
            React.cloneElement(item.icon, { className: "sidebar-icon" })}
          <span>{item.label}</span>
        </NavLink>
      ))}
    </div>
  );
}

export default SideBar;
