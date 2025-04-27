import { useEffect, useState } from "react";
import PageHeader from "../components/common/PageHeader";

import userService from "../services/userService";
import { useNavigate, useParams } from "react-router";
import { useCards } from "../hooks/useCards";
import feedbackService from "../services/feedbackService";

function SandBox() {
  const [usersArr, setUsersArr] = useState([]);
  const navigate = useNavigate();
  const { isLoading } = useCards();

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

  return (
    <div className="container-fluid">
      <PageHeader title="SandBox" />
      {isLoading ? (
        <div className="spinner-border text-danger" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <table className="table table-bordered w-100">
          <thead>
            <tr className="border-1 table-primary">
              <th>User Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Email</th>
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
                  <td>{user?.name.last}</td>
                  <td>{user?.phone}</td>
                  <td>{user?.email}</td>
                  <td>{user?.isAdmin ? "true" : "false"}</td>
                  <td>{user?.isBusiness ? "true" : "false"}</td>
                  <td>{user?.createdAt}</td>
                  <td>
                    {/* User Info */}
                    <button
                      onClick={() => navigate(`/show-user-info/${user?._id}`)}
                      className="border-0 bg-transparent"
                    >
                      <i className="bi bi-eye-fill fs-5 text-primary"></i>
                    </button>
                  </td>
                  <td>
                    {/* Delete User */}
                    <button
                      onClick={async () => {
                        const deleteUser =
                          await feedbackService.deleteUserMessage();
                        if (deleteUser) {
                          try {
                            const response = await userService.deleteUser(
                              user._id
                            );
                            return response;
                          } catch (error) {
                            console.log(error);
                          }
                        }
                      }}
                      className="border-0 bg-transparent"
                    >
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
      )}
    </div>
  );
}

export default SandBox;
