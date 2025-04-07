import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import CopySignUp from "../pages/SignUp";
import FavCards from "../pages/FavCards";

function AppRouters() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fav-cards" element={<FavCards />} />
      <Route path="/about" element={<About />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  );
}

export default AppRouters;
