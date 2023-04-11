import React, { useState } from "react";
import Sidebar from "../../Components/Layout/Sidebar";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/DBLayout/Navbar";
import { useSelector } from "react-redux";
import SideBar from "./Components/DBLayout/SideBar";
const Dashbord = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [isSidebarOpen, SetIsSideBarOpen] = useState(true);

  return (
    <>
      <Box
        display={isNonMobile ? "flex" : "block"}
        width={"100%"}
        height=" 100%"
      >
        <SideBar
          isNonMobile={isNonMobile}
          drawerWidth="250px"
          isSidebarOpen={isSidebarOpen}
          SetIsSideBarOpen={SetIsSideBarOpen}
        />
        <Box>
          <Navbar
            isSidebarOpen={isSidebarOpen}
            SetIsSideBarOpen={SetIsSideBarOpen}
          />
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default Dashbord;
