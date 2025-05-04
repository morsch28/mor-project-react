import { useNavigate } from "react-router";
import { useAuth } from "../context/auth.context";
import { useFormik } from "formik";
import Joi from "joi";
import { useEffect, useState } from "react";
import { normalizeUser } from "../users/normalizeUser";
import userService from "../services/userService";
import { errorMsg, successMsg } from "../services/feedbackService";
import feedbackService from "../services/feedbackService";

export function useSignUpForm(userToUpdate) {
  const navigate = useNavigate();
  const { createUser, login, setUser } = useAuth();

  function onSuccess() {
    return new Promise((resolve) => {
      feedbackService.onFireModal(
        "warning",
        "Are you sure you want to update user details?",
        (isConfirm) => {
          resolve(isConfirm);
        }
      );
    });
  }
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      first: userToUpdate?.name.first || "",
      last: userToUpdate?.name.last || "",
      middle: userToUpdate?.name.middle || "",
      phone: userToUpdate?.phone || "",
      email: userToUpdate?.email || "",
      password: userToUpdate?.password || "",
      url: userToUpdate?.image.url || "",
      alt: userToUpdate?.image.alt || "",
      state: userToUpdate?.address.state || "",
      country: userToUpdate?.address.country || "",
      city: userToUpdate?.address.city || "",
      street: userToUpdate?.address.street || "",
      houseNumber: userToUpdate?.address.houseNumber || "",
      zip: userToUpdate?.address.zip || "",
      isBusiness: userToUpdate?.isBusiness || false,
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
        email: userToUpdate
          ? Joi.optional()
          : Joi.string().min(5).max(255).required().email({ tlds: false }),
        password: userToUpdate
          ? Joi.optional()
          : Joi.string()
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
        zip: Joi.number().min(2).max(256).required(),
        isBusiness: Joi.boolean(),
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
        if (userToUpdate) {
          console.log(userToUpdate);
          delete user.email;
          delete user.password;
          delete user.isBusiness;
          const response = await userService.updateUser(userToUpdate._id, user);
          if (response?.status == 200) {
            const userConfirm = await onSuccess();
            if (userConfirm) {
              setUser(response?.data);
              successMsg("User updates successfully");
              navigate(`/user-info`);
            }
          } else {
            errorMsg("Something was wrong: " + response);
          }
        } else {
          const response = await createUser(user);
          if (response?.status === 201 || response?.status === 200) {
            successMsg(`${values.email} created successfully`);
            await login({ email: values.email, password: values.password });
            successMsg(`Welcome ${values?.first} ${values?.last}`);
            navigate("/");
          }
        }
      } catch (err) {
        console.log("error:", err);
        errorMsg(err.response.data);
      }
    },
  });

  // שאלה - למה כשאני מחזירה את formik לבד אפשר להחזיר אותו בלי ספרד ושאני מוסיפה serverError אז אני צריכה להוסיף את זה ?
  return formik;
}
