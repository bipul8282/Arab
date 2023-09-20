import React from 'react';
import WidgetsIcon from '@mui/icons-material/Widgets';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import QuizIcon from '@mui/icons-material/Quiz';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import Avatar from '@mui/material/Avatar';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

import './SideNavbar.css'; 

const SideNavbar = () => {
  const user = {
    avatarSrc:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    name: 'Bipul kumar ', 
    email: 'kb84101@gmail.com', 
  };

  const nav = [
    {
      icon: (
        <Avatar alt={user.name} src={user.avatarSrc} />
      ),
    },
    {
      icon: <WidgetsIcon />,
      name: 'Dashboard',
    },
    {
      icon: <AddBusinessIcon />,
      name: 'Pearks',
    },
    {
      icon: <BookmarkAddIcon />,
      name: 'Addons',
    },
    {
      icon: <QuizIcon />,
      name: 'FAQ',
    },
    {
      icon: <ContactMailIcon />,
      name: 'Support',
    },
    {
      icon: <PowerSettingsNewIcon />,
      name: 'Logout',
    },
  ];

  return (
    <div className="side-navbar">
      <div className="user-info">
       
        <Avatar alt={user.name} src={user.avatarSrc} />
        <div className="user-details">
          <span className="user-name">{user.name}</span> 
          <span className="user-email">{user.email}</span> 
        </div>
      </div>
      <div className="nav-items">
        {nav?.slice(1, -1).map((item, index) => (
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
