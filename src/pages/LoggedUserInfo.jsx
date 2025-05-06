import { useAuth } from "../context/auth.context";
import PageHeader from "../components/common/PageHeader";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import userService from "../services/userService";

function LoggedUserInfo() {
  const { user } = useAuth();
  const navigate = useNavigate();

  return user ? (
    <div
      className="d-flex bg-primary-subtle my-4 flex-column  align-items-center"
      style={{ maxWidth: "400px", padding: "10px" }}
    >
      <PageHeader title="Logged User Info" />
      <div className="d-flex flex-column justify-content-center align-items-center gap-5">
        <img src={user.image.url} className="w-50 mx-3" />
        <div className="d-flex flex-column fw-bold fs-5 gap-4">
          <div>UserId: {user._id}</div>
          <div>
            Name: {user.name.first} {user.name.last}
          </div>
          <div>Phone: {user.phone}</div>
          <div>Email: {user.email}</div>
          <div>
            Address: {user.address.street}, {user.address.houseNumber},
            {user.address.city}, {user.address.country}
          </div>
        </div>
      </div>
      <button
        className="my-3 py-2 px-3 btn btn-primary"
        onClick={() => navigate(`/edit-user/${user?._id}`)}
      >
        Edit User Details
      </button>
    </div>
  ) : (
    <div>No User to show</div>
  );
}

export default LoggedUserInfo;
