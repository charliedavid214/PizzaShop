import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Footer from "./Footer";
import Homepage from "./Pages/Hompage"
import OrderOnline from "./auth/OrderOnline";
import Menu from "./auth/Menu";
import Login from "./auth/LoginPage";




function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/OrderOnline" element={<OrderOnline/>}/>
          <Route path="/Menu" element={<Menu/>}/>
          <Route path="/LoginPage" element={<Login/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
