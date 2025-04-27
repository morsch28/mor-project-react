import { useNavigate } from "react-router";
import PageHeader from "./common/PageHeader";

function ShowUserInfoDetails({ user }) {
  const navigate = useNavigate();

  return (
    <div className="d-flex bg-warning flex-column w-50 justify-content-center align-items-center">
      <PageHeader title="User Information" />
      <div className="d-flex justify-content-center align-items-center gap-5">
        <img src={user?.image.url} className="w-50 mx-3" />
        <div className="d-flex flex-column  fs-5 gap-4 my-4">
          <div>UserId: {user?._id}</div>
          <div>
            <span className="fw-bold">Name:</span> {user?.name.first}
            {user?.name.last}
          </div>
          <div>
            <span className="fw-bold">Phone:</span> {user?.phone}
          </div>
          <div>
            <span className="fw-bold">Email:</span> {user?.email}
          </div>
          <div>
            <span className="fw-bold">Address:</span> {user?.address.street},{" "}
            {user?.address.houseNumber},{user?.address.city},{" "}
            {user?.address.country}
          </div>
        </div>
      </div>
      {/* Edit Button */}
      <button
        onClick={() => navigate(`/edit-user/${user?._id}`)}
        className="my-3 py-2 px-3 btn btn-primary"
      >
        Edit User Details
      </button>
    </div>
  );
}

export default ShowUserInfoDetails;
