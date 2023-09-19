import React from 'react';
import WidgetsIcon from '@mui/icons-material/Widgets';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import QuizIcon from '@mui/icons-material/Quiz';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import Avatar from '@mui/material/Avatar'; // Import Avatar component
import "./SideNavbar.css"; // Import a CSS file for styling
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const SideNavbar = () => {
  const nav = [
    {
      icon: <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />, // Use Avatar component for an image
    },
    {
      icon: <WidgetsIcon />,
      name: "Dashboard",
    },
    {
      icon: <AddBusinessIcon />,
      name: "Pearks",
    },
    {
      icon: <BookmarkAddIcon />,
      name: "Addons",
    },
    {
      icon: <QuizIcon />,
      name: "FAQ",
    },
    {
      icon: <ContactMailIcon />,
      name: "Support",
    },
    {
      icon: <PowerSettingsNewIcon />,
      name: "Logout",
    },
  ];

  return (
    <div className="side-navbar">
      <div className="nav-items">
        {nav?.map((item, index) => (
          <div key={index} className="nav-item">
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <div className="logout">
        {nav[nav.length - 1].icon} {nav[nav.length - 1].name}
      </div>
    </div>
  );
};

export default SideNavbar;
