import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import CopySignUp from "../pages/SignUp";
import FavCards from "../pages/FavCards";
import MyCards from "../pages/MyCards";
import CardDetails from "../components/CardDetails";
import CreateCardButton from "../components/CreateCardButton";
import CreateNewCard from "../pages/CreateNewCard";
import UpdateCard from "../pages/UpdateCard";
import SandBox from "../pages/SandBox";

import LoggedUserInfo from "../pages/LoggedUserInfo";
import ShowUserInfo from "../components/ShowUserInfo";
import EditUser from "../pages/EditUser";

function AppRouters() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fav-cards" element={<FavCards />} />
      <Route path="/my-cards" element={<MyCards />} />
      <Route path="/sand-box" element={<SandBox />} />
      <Route path="/about" element={<About />} />
      <Route path="/user-info" element={<LoggedUserInfo />} />
      <Route path="/show-user-info/:id" element={<ShowUserInfo />} />
      <Route path="/edit-user/:id" element={<EditUser />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/card-details/:id" element={<CardDetails />} />
      <Route path="/create-card" element={<CreateNewCard />} />
      <Route path="/update-card/:id" element={<UpdateCard />} />
      <Route path="/my-cards" element={<MyCards />} />
    </Routes>
  );
}

export default AppRouters;
