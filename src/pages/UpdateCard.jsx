import { useFormik } from "formik";
import Joi from "joi";
import { useNavigate } from "react-router";
import PageHeader from "../components/common/PageHeader";
import CardForm from "../components/CardForm";
import { useCards } from "../hooks/useCards";

function UpdateCard({ card }) {
  const { handleUpdateCard } = useCards();
  let navigate = useNavigate();
  console.log("the card: ", card);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: card?.title || "",
      subtitle: card?.subtitle || "",
      description: card?.description || "",
      phone: card?.phone || "",
      email: card?.email || "",
      web: card?.web || "",
      url: card?.url || "",
      alt: card?.alt || "",
      state: card?.state || "",
      country: card?.country || "",
      city: card?.city || "",
      street: card?.street || "",
      houseNumber: card?.houseNumber || "",
      zip: card?.zip || "",
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
    onSubmit: async () => {
      try {
        if (card) {
          const response = await handleUpdateCard(card._id);
          navigate("/");
          return response;
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <PageHeader
        title="Update Card"
        description="here you can edit your cards you created"
      />
      <CardForm formik={formik} />
    </>
  );
}

export default UpdateCard;
