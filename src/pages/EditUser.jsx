import { useEffect, useState } from "react";
import userService from "../services/userService";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { useSignUpForm } from "../hooks/useSignUpForm";
import PageHeader from "../components/common/PageHeader";
import Input from "../components/common/Input";
import FormButton from "../components/common/FormButtons";

function EditUser() {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const { handleSubmit, touched, errors, isValid, getFieldProps, setValues } =
    useSignUpForm();

  useEffect(() => {
    const loadEditUser = async () => {
      try {
        const UserToEdit = await userService.getUserById(id);
        setUser(UserToEdit);
        return UserToEdit;
      } catch (error) {
        console.log(error);
      }
    };
    loadEditUser();
  }, [id]);

  if (!user) {
    return <div>Not Found User</div>;
  }

  const onSubmit = async () => {
    try {
      const response = await userService.updateUser(id);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center">
      <PageHeader title="Edit User" />
      <form className="w-50" onSubmit={handleSubmit(onSubmit)}>
        {/* {serverError && <div className="alert alert-danger">{serverError}</div>} */}
        <div className="row">
          <div className="col-4">
            <Input
              id="id"
              placeholder="First Name"
              {...getFieldProps("first")}
              error={touched.first && errors.first}
              //   value={user.name.first}
            />
          </div>
          <div className="col-4">
            <Input
              placeholder="Middle Name"
              {...getFieldProps("middle")}
              error={touched.middle && errors.middle}
            />
          </div>
          <div className="col-4">
            <Input
              placeholder="Last Name"
              {...getFieldProps("last")}
              error={touched.last && errors.last}
            />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-6">
            <Input
              placeholder="Phone"
              {...getFieldProps("phone")}
              error={touched.phone && errors.phone}
            />
          </div>
          <div className="col-6">
            <Input
              placeholder="Email"
              {...getFieldProps("email")}
              error={touched.email && errors.email}
            />
          </div>
          <Input
            placeholder="Password"
            type="password"
            {...getFieldProps("password")}
            error={touched.password && errors.password}
          />
        </div>

        <div className="row">
          <div className="col-6">
            <Input
              placeholder="Image Url"
              {...getFieldProps("url")}
              error={touched.url && errors.url}
            />
          </div>
          <div className="col-6">
            <Input
              placeholder="Image Alt"
              {...getFieldProps("alt")}
              error={touched.alt && errors.alt}
            />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-6">
            <Input
              placeholder="Country"
              {...getFieldProps("country")}
              error={touched.country && errors.country}
            />
          </div>
          <div className="col-6">
            <Input
              placeholder="City"
              {...getFieldProps("city")}
              error={touched.city && errors.city}
            />
          </div>
          <div className="col-6">
            <Input
              placeholder="Street"
              {...getFieldProps("street")}
              error={touched.street && errors.street}
            />
          </div>
          <div className="col-6">
            <Input
              type="number"
              placeholder="House number"
              {...getFieldProps("houseNumber")}
              error={touched.houseNumber && errors.houseNumber}
            />
          </div>
          <div className="col-6">
            <Input
              placeholder="State"
              {...getFieldProps("state")}
              error={touched.state && errors.state}
            />
          </div>
          <div className="col-6">
            <Input
              placeholder="Zip"
              {...getFieldProps("zip")}
              error={touched.zip && errors.zip}
            />
          </div>

          <Input
            type="checkbox"
            {...getFieldProps("isBusiness")}
            label="Sign-Up as business?"
          />
          <FormButton navigate={navigate} isValid={isValid} />
        </div>
      </form>
    </div>
  );
}

export default EditUser;
