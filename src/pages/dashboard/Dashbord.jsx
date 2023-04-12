import React, { useState } from "react";
import Sidebar from "../../Components/Layout/Sidebar";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/DBLayout/Navbar";
import { useSelector } from "react-redux";
import SideBar from "./Components/DBLayout/SideBar";
import { useGetUserQuery } from "state/api";
const Dashbord = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [isSidebarOpen, SetIsSideBarOpen] = useState(true);
  const userId = useSelector((state) => state.global.userId);
  const { data } = useGetUserQuery(userId);

  return (
    <>
      <Box
        display={isNonMobile ? "flex" : "block"}
        width={"100%"}
        height=" 100%"
      >
        <SideBar
          user={data || {}}
          isNonMobile={isNonMobile}
          drawerWidth="250px"
          isSidebarOpen={isSidebarOpen}
          SetIsSideBarOpen={SetIsSideBarOpen}
        />
        <Box flexGrow={1}>
          <Navbar
            user={data || {}}
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
