import React from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import FlexBetween from "../FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "state";
import profile from "assets/profile.jpeg";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  InputBase,
  MenuItem,
  Menu,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";

const Navbar = (SetIsSideBarOpen, user, isSidebarOpen) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handelClick = (event) => setAnchorEl(event.currentTarget);
  const handelClose = () => setAnchorEl(null);
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <>
      {" "}
      <AppBar
        sx={{
          position: "static",
          background: "none",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Left Side */}
          <FlexBetween>
            <IconButton onClick={() => SetIsSideBarOpen(!isSidebarOpen)}>
              <MenuIcon />
            </IconButton>
            <FlexBetween
              backgroundColor={theme.palette.background.alt}
              borderRadius="9px"
              gap="3rem"
              p="0.1rem1.5rem"
            >
              <InputBase placeholder="Search..." />
              <IconButton>
                <Search />
              </IconButton>
            </FlexBetween>
          </FlexBetween>
          {/* Right Side */}
          <FlexBetween gap="1.5rem">
            <IconButton onClick={() => dispatch(setMode())}>
              {theme.palette.mode === "dark" ? (
                <DarkModeOutlined sx={{ fontSize: "25px" }} />
              ) : (
                <LightModeOutlined sx={{ fontSize: "25px" }} />
              )}
            </IconButton>
            <IconButton>
              <SettingsOutlined sx={{ fontSize: "25px" }} />
            </IconButton>
            <FlexBetween>
              <Button
                onClick={handelClick}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  textTransform: "none",
                  gap: "1rem",
                }}
              >
                {" "}
                <Box
                  component="img"
                  alt="Profile"
                  src={profile}
                  height="40px"
                  borderRadius="50%"
                  sx={{ objectFit: "cover" }}
                  width="40px"
                ></Box>
                <Box textAlign="left">
                  <Typography
                    fontWeight="bold"
                    fontSize="0.85rem"
                    sx={{ color: theme.palette.secondary[100] }}
                  >
                    {user.name}
                  </Typography>
                  <Typography
                    fontSize="0.75 rem"
                    sx={{ color: theme.palette.secondary[100] }}
                  >
                    {user.occupation}
                  </Typography>
                </Box>
                <ArrowDropDownOutlined
                  sx={{
                    color: theme.palette.secondary[300],
                    fontSize: "25px",
                  }}
                />
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={isOpen}
                onclose={handelClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              >
                <MenuItem onClick={handelClose}>Log Out</MenuItem>
              </Menu>
            </FlexBetween>
          </FlexBetween>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
