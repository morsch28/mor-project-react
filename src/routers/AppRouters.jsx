import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import CopySignUp from "../pages/SignUp";
import FavCards from "../pages/FavCards";
import MyCards from "../pages/MyCards";
import SandBox from "../pages/SandBox";
import CardDetails from "../components/CardDetails";
import CreateCardButton from "../components/CreateCardButton";
import CreateNewCard from "../components/CreateNewCard";

function AppRouters() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fav-cards" element={<FavCards />} />
      <Route path="/my-cards" element={<MyCards />} />
      <Route path="/sand-box" element={<SandBox />} />
      <Route path="/about" element={<About />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/card-details/:id" element={<CardDetails />} />
      <Route path="/create-card" element={<CreateNewCard />} />
    </Routes>
  );
}

export default AppRouters;
