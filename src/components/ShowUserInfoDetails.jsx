import PageHeader from "./common/PageHeader";

function ShowUserInfoDetails({ user }) {
  console.log(user);
  return (
    <div className="d-flex bg-warning flex-column w-50">
      <PageHeader
        title="User Information"
        description="In this page you can edit your details"
      />
      <div className="d-flex justify-content-center align-items-center gap-5">
        <img src={user?.image.url} className="w-50 mx-3" />
        <div className="d-flex flex-column  fs-5 gap-4 my-4">
          <div>UserId: {user?._id}</div>
          <div>
            Name: {user?.name.first} {user?.name.last}
          </div>
          <div>Phone: {user?.phone}</div>
          <div>Email: {user?.email}</div>
          <div>
            Address: {user?.address.street}, {user?.address.houseNumber},
            {user?.address.city}, {user?.address.country}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowUserInfoDetails;
