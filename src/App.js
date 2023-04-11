import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Layout/Header";
import Home from "./pages/Home/Home";
import Footer from "./Components/Layout/Footer";
import Dashbord from "./pages/dashboard/Dashbord";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Crm from "./pages/CRM/Crm";
import Allagents from "./pages/agent/Allagents";
import Agentprofile from "./pages/agent/Agentprofile";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "theme";
import { useSelector } from "react-redux";
import state from "state";
import { useMemo } from "react";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashbord />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashbord" element={<Dashbord />} />

            <Route path="/crm" element={<Crm />} />
            <Route path="/agentprofile:id" element={<Agentprofile />} />
            <Route path="/allagents" element={<Allagents />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
