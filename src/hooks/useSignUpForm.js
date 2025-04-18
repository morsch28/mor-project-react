import { useNavigate } from "react-router";
import { useAuth } from "../context/auth.context";
import { useFormik } from "formik";
import Joi from "joi";

export function useSignUpForm() {
  const navigate = useNavigate();
  const { createUser, login } = useAuth();

  const formik = useFormik({
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
      return errors;
    },
    onSubmit: async (values) => {
      try {
        const user = normalizeUser(values);
        const { status } = await createUser(user);
        if (status === 201) {
          await login({ email: values.email, password: values.password });
          navigate("/");
        }
      } catch (err) {
        console.log(err);
      }
    },
  });
  return formik;
}
