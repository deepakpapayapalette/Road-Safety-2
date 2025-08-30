import React, { useState } from "react";
import { Drawer, AppBar, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import "./DashboardLayout.css";
import "../assets/css/home.css";
import TopbarHeader from "../components/Topbar/Topbar";
import Sidebar from "../Layout/Sidebar";

const drawerWidth = 240;
const collapsedWidth = 60;

export default function DashboardLayout({ children }) {
  const [open, setOpen] = useState(true);
  
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar 
        style={{ backgroundColor: 'transparent', boxShadow: "none" }}
        position="fixed"
        className="header1"
        sx={{
          width: `calc(100% - ${open ? drawerWidth : collapsedWidth}px)`,
          marginLeft: `${open ? drawerWidth : collapsedWidth}px`,
          transition: 'width 0.3s ease, margin-left 0.3s ease'
        }}
      >
        <TopbarHeader />
      </AppBar> 
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        className={`sidebar position-relative bg-[#525fe1] ${open ? "open" : "closed"}`} 
      >
        <IconButton
          className="toggle-icon-style"
          id="toggle-icon-style"
          color="inherit"
          aria-label="toggle sidebar"
          onClick={toggleDrawer}
          edge="start"
          sx={{ mr: 2 }}
        >
          {open ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton> 
        <Sidebar toggleDrawer={toggleDrawer} open={open} />
      </Drawer>
      
      <Box 
        component="div"
        className={`main-content py-5 w-full overflow-x-auto ${!open ? 'collapsed' : ''}`}
        sx={{
          flexGrow: 1,
          padding: 3,
          marginLeft: `${open ? drawerWidth : collapsedWidth}px`,
          transition: 'margin-left 0.3s ease',
          marginTop: '64px' // Account for AppBar height
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
