import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css"

import HomePage from "./pages/HomePage";
import PartnerPage from "./pages/PartnerPage";
import ContactPage from "./pages/ContactPage";
import ServicePage from "./pages/ServicePage";
import Footer from "./components/Footer";

function App() {

  return (

    <Router>

      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} exact > </Route>
        <Route path="/partners" element={<PartnerPage />}></Route>
        <Route path="/kontakt" element={<ContactPage />} ></Route>
        <Route path="/tjansteerbjudande" element={<ServicePage />}> </Route>

      </Routes>
      <Footer />
    </Router >





  )
}

export default App
