import { useEffect, useState } from "react";
import userService from "../services/userService";
import { useParams } from "react-router";
import ShowUserInfoDetails from "./ShowUserInfoDetails";

function ShowUserInfo() {
  const [userInfoToShow, setUserInfoToShow] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const loadUser = async () => {
      try {
        const userDetails = await userService.getUserById(id);
        setUserInfoToShow(userDetails);
        return userDetails;
      } catch (error) {
        console.log(error);
      }
    };
    loadUser();
  }, [id]);

  return <ShowUserInfoDetails user={userInfoToShow} />;
}

export default ShowUserInfo;
