import { useFormik } from "formik";
import Joi from "joi";
import { normalizeCards } from "../cards/normalizeCards";
import cardService from "../services/cardService";
import { useNavigate } from "react-router";
import PageHeader from "../components/common/PageHeader";
import CardForm from "../components/CardForm";
import { useCards } from "../hooks/useCards";

function CreateNewCard() {
  const { handleCreateNewCard } = useCards();
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      title: "",
      subtitle: "",
      description: "",
      phone: "",
      email: "",
      web: "",
      url: "",
      alt: "",
      state: "",
      country: "",
      city: "",
      street: "",
      houseNumber: "",
      zip: "",
    },
    validate(values) {
      const schema = Joi.object({
        title: Joi.string().min(2).max(256).required(),
        subtitle: Joi.string().min(2).max(256).required(),
        description: Joi.string().min(2).max(1024).required(),
        phone: Joi.string().min(9).max(11).required(),
        email: Joi.string().min(5).required(),
        web: Joi.string().min(14).allow(""),
        url: Joi.string().min(14).allow(""),
        alt: Joi.string().min(2).max(256).allow(""),
        state: Joi.string().allow(""),
        country: Joi.string().required(),
        city: Joi.string().required(),
        street: Joi.string().required(),
        houseNumber: Joi.string().min(1).required(),
        zip: Joi.number(),
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
        const response = await handleCreateNewCard(values);
        navigate("/");
        return response;
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <PageHeader
        title="Create Card"
        description="here you can create a new card"
      />
      <CardForm formik={formik} />
    </>
  );
}

export default CreateNewCard;
