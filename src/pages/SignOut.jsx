import { useEffect } from "react";
import { useAuth } from "../context/auth.context";
import { useNavigate } from "react-router";

function SignOut() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate("/");
  }, []);

  return null;
}

export default SignOut;
