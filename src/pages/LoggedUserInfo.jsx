import { useAuth } from "../context/auth.context";
import PageHeader from "../components/common/PageHeader";

function LoggedUserInfo() {
  const { user } = useAuth();
  return user ? (
    <div className="d-flex bg-danger flex-column w-50">
      <PageHeader
        title="User Information"
        description="In this page you can edit your details"
      />
      <div className="d-flex justify-content-center align-items-center gap-5">
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
    </div>
  ) : (
    <div>No User to show</div>
  );
}

export default LoggedUserInfo;
