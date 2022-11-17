import Home from "../pages/Home";
import About from "../pages/About";
import Error from "../pages/Error";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Result from "../pages/Result";
import Booking from "../pages/Booking";
import App from "../App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const routes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          {/* <Route path="/About" element={<About />} /> */}
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Error" element={<Error />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Result" element={<Result/>} />
          <Route path="/Booking" element={<Booking/>} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
};

export default routes;
