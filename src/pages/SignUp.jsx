import PageHeader from "../components/common/PageHeader";
import Input from "../components/common/Input";
import { useFormik } from "formik";
import Joi from "joi";
import userService from "../services/userService";
import { useNavigate } from "react-router";
import { normalizeUser } from "../users/normalizeUser";
import { useAuth } from "../context/auth.context";

function SignUp() {
  const navigate = useNavigate();
  const { createUser } = useAuth();

  const { getFieldProps, touched, errors, handleSubmit, isValid } = useFormik({
    initialValues: {
      first: "",
      last: "",
      middle: "",
      phone: "",
      email: "",
      password: "",
      url: "",
      alt: "",
      state: "",
      country: "",
      city: "",
      street: "",
      houseNumber: "",
      zip: "",
      isBusiness: false,
    },
    validate(values) {
      const schema = Joi.object({
        first: Joi.string().min(2).max(255).required(),
        middle: Joi.string().min(2).max(256).allow(""),
        last: Joi.string().min(2).max(255).required(),
        phone: Joi.string()
          .min(9)
          .max(10)
          .required()
          .pattern(/^(\+9725\d{8}|05\d{8}$)/),
        email: Joi.string().min(5).max(255).required().email({ tlds: false }),
        password: Joi.string()
          .min(9)
          .max(20)
          .required()
          .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*(\d))(?=.*[!@#$%^&*-])/),
        url: Joi.string().allow("").uri(),
        alt: Joi.string().allow(""),
        state: Joi.string().min(2).max(256).allow(""),
        country: Joi.string().min(2).max(100).required(),
        city: Joi.string().min(2).max(100).required(),
        street: Joi.string().min(2).max(256).required(),
        houseNumber: Joi.number().integer().positive().required(),
        zip: Joi.string().min(4).max(10).required(),
        isBusiness: Joi.boolean().required(),
      });
      const { error } = schema.validate(values, { abortEarly: false });
      if (!error) {
        return null;
      }
      const errors = {};
      for (const detail of error.details) {
        errors[detail.path[0]] = detail.message;
      }
      console.log(errors);
      return errors;
    },
    onSubmit: async (values) => {
      try {
        const user = normalizeUser(values);
        await createUser(user);
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <div className="container d-flex flex-column align-items-center">
      <PageHeader title="Sign-Up" />
      <form className="w-50" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-4">
            <Input
              id="id"
              placeholder="First Name"
              {...getFieldProps("first")}
              error={touched.first && errors.first}
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
          <button
            disabled={!isValid}
            type="submit"
            className="btn btn-primary w-50 mb-5"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
