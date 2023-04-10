import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Layout/Header";
import Home from "./pages/Home/Home";
import Footer from "./Components/Layout/Footer";
import Dashbord from "./pages/dashboard/Dashbord";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashbord />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
