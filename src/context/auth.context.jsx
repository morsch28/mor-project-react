import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import userService from "../services/userService";

export const authContext = createContext();
authContext.displayName = "Auth";

export default function AuthProvider({ children }) {
  const [decodedToken, setDecodedToken] = useState(
    userService.getUserFromToken()
  );

  const [user, setUser] = useState(undefined);

  useEffect(() => {
    if (decodedToken) {
      userService.refreshToken();
      const loadUser = async () => {
        const userId = await userService.getUserById(decodedToken._id);
        setUser(userId);
        return userId;
      };
      loadUser();
    }
  }, [decodedToken]);

  const login = async (credential) => {
    const response = await userService.login(credential);
    setDecodedToken(userService.getUserFromToken());
    return response;
  };

  const logout = () => {
    userService.logout();
    setUser(userService.getUserFromToken());
  };

  return (
    <authContext.Provider
      value={{
        user,
        decodedToken,
        login,
        logout,
        setUser,
        createUser: userService.createUser,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

export function useAuth() {
  return useContext(authContext);
}
