import { useEffect, useState } from "react";
import PageHeader from "../components/common/PageHeader";

import userService from "../services/userService";

function SandBox() {
  const [usersArr, setUsersArr] = useState([]);

  useEffect(() => {
    const loadAllUsers = async () => {
      try {
        const response = await userService.getAllUsers();
        setUsersArr(response);
        return response;
      } catch (error) {
        console.log(error);
      }
    };
    loadAllUsers();
  }, []);

  console.log(usersArr);

  return (
    <div className="container-fluid">
      <PageHeader title="SandBox" />

      <table className="table table-bordered w-100">
        <thead>
          <tr className="border-1 table-primary">
            <th>User Id</th>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Image Url</th>
            <th>Image Alt</th>
            <th>Image Id</th>
            <th>State</th>
            <th>Country</th>
            <th>City</th>
            <th>Street</th>
            <th>House Number</th>
            <th>Zip</th>
            <th>Address Id</th>
            <th>Is Admin</th>
            <th>Is Business</th>
            <th>Created At</th>
            <th>User Info</th>
            <th>Delete User</th>
          </tr>
        </thead>
        <tbody>
          {usersArr && usersArr.length > 0 ? (
            usersArr.map((user) => (
              <tr key={user?._id} className="table-active">
                <td>{user?._id}</td>
                <td>{user.name?.first}</td>
                <td>{user?.name.middle}</td>
                <td>{user?.name.last}</td>
                <td>{user?.phone}</td>
                <td>{user?.email}</td>
                <td>{user?.image?.url}</td>
                <td>{user?.name?.alt}</td>
                <td>{user?.name?._id}</td>
                <td>{user?.address.state}</td>
                <td>{user?.address.country}</td>
                <td>{user?.address.city}</td>
                <td>{user?.address.street}</td>
                <td>{user?.address.houseNumber}</td>
                <td>{user?.address.zip}</td>
                <td>{user?.address._id}</td>
                <td>{user?.isAdmin ? "true" : "false"}</td>
                <td>{user?.isBusiness ? "true" : "false"}</td>
                <td>{user?.createdAt}</td>
                <td>
                  <button className="border-0 bg-transparent">
                    <i className="bi bi-eye-fill fs-5 text-primary"></i>
                  </button>
                </td>
                <td>
                  <button className="border-0 bg-transparent">
                    <i className="bi bi-trash fs-5 text-danger"></i>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <div></div>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default SandBox;
