import { jwtDecode } from "jwt-decode";
import httpServices from "./httpService";
import { useNavigate } from "react-router";

const TOKEN_KEY = "token";

function createUser(user) {
  return httpServices.post("/users", user);
}

async function login(credential) {
  const response = await httpServices.post("/users/login", credential);
  console.log(response);
  setToken(response.data);
  return response;
}

function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
  refreshToken();
}

function refreshToken() {
  httpServices.setDefaultHeader("x-auth-token", getJWT());
}

function getJWT() {
  return localStorage.getItem(TOKEN_KEY);
}

function logout() {
  localStorage.removeItem(TOKEN_KEY);
}

function getUserFromToken() {
  try {
    const token = getJWT();
    return jwtDecode(token);
  } catch {
    return null;
  }
}
async function getUserById(id) {
  try {
    const response = await httpServices.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function getAllUsers() {
  try {
    const response = await httpServices.get("/users");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function updateUser(id, user) {
  try {
    const response = await httpServices.put(`/users/${id}`, user);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function deleteUser(id) {
  try {
    const response = await httpServices.delete(`/users/${id}`, {
      headers: {
        "x-auth-token": getJWT(),
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function updateBusinessStatus(id) {
  try {
    const response = await httpServices.patch(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

const userService = {
  createUser,
  login,
  logout,
  getUserById,
  getUserFromToken,
  refreshToken,
  getAllUsers,
  updateUser,
  deleteUser,
  updateBusinessStatus,
};

export default userService;
