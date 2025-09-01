import React from 'react';
import '../assets/css/sidebar.css'
import img1 from '../assets/images/svg/icon1.svg'
import { Box, Typography } from "@mui/material";
import { NavLink } from 'react-router-dom';

const Sidebar = ({ open }) => {
  
  return (
    <aside className="app-sidebar text-white flex flex-col">
      <div className="flex items-center justify-center">
        <img src="/image 12.png" alt="Logo" className="brand" />
      </div>
      <nav className="flex-1 space-y-2">
        <Box className="sidebar-content"> 
          <NavLink to="/" className={`sidebar-item no-underline ${!open ? 'collapsed' : ''}`}>
            <Box className="sidebar-icon"><span className="text-lg"><img src={img1} alt="" /></span></Box>
            {open && <Typography variant="body1"><span  className='text-white '>Dashboard</span></Typography>}
          </NavLink>
          <NavLink to="/station-master" className={`sidebar-item no-underline ${!open ? 'collapsed' : ''}`}>
            <Box className="sidebar-icon"><span className="text-lg"><img src={img1} alt="" /></span></Box>
            {open && <Typography variant="body1"><span  className='text-white '>Station Master</span></Typography>}
          </NavLink>

          <NavLink to="/asset-master" className={`sidebar-item no-underline ${!open ? 'collapsed' : ''}`}> 
                <Box className="sidebar-icon"><span className="text-lg"><img src={img1} alt="" /></span>
                </Box>
                  {open && <Typography variant="body1"><span className='text-white no-underline'> Asset Master</span></Typography>}

                </NavLink>  
        </Box>
             
      </nav>
    </aside>
  );
};

export default Sidebar;



