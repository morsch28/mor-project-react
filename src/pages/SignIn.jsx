import PageHeader from "../components/common/PageHeader";
import Input from "../components/common/Input";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import Joi from "joi";
import { useAuth } from "../context/auth.context";
import FormButton from "../components/common/FormButtons";
import { successMsg } from "../services/feedbackService";

function SignIn() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const { getFieldProps, touched, errors, handleSubmit, isValid } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate(values) {
      const schema = Joi.object({
        email: Joi.string().min(5).max(255).required().email({ tlds: false }),
        password: Joi.string()
          .min(9)
          .max(20)
          .required()
          .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*(\d))(?=.*[!@#$%^&*-])/),
      });
      const { error } = schema.validate(values, { abortEarly: false });
      if (!error) {
        return null;
      }
      const errors = {};
      for (const detail of error.details) {
        errors[detail.path[0]] = detail.message;
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        const response = await login(values);
        if (response?.status == 200) {
          successMsg(`${values.email} successfully connected`);
        }
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    },
  });
  return (
    <div className="container d-flex flex-column align-items-center gap-5">
      <PageHeader
        title="Sign-In"
        description="here you can login the site with your details"
      />
      <form onSubmit={handleSubmit} className="w-50">
        <Input
          placeholder="Email"
          {...getFieldProps("email")}
          error={touched.email && errors.email}
        />
        <Input
          placeholder="Password"
          type="password"
          {...getFieldProps("password")}
          error={touched.password && errors.password}
        />
        <FormButton navigate={navigate} isValid={isValid} />
      </form>
    </div>
  );
}

export default SignIn;
