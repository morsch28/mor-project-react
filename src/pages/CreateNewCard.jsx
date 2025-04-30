import { useFormik } from "formik";
import Joi from "joi";
import { normalizeCards } from "../cards/normalizeCards";
import cardService from "../services/cardService";
import { useNavigate } from "react-router";
import PageHeader from "../components/common/PageHeader";
import CardForm from "../components/CardForm";
import { useCards } from "../hooks/useCards";
import { errorMsg, successMsg } from "../services/feedbackService";

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
        if (response?.status == 200 || response?.status == 201) {
          successMsg("Card created successfully");
          navigate("/my-cards");
        }

        // feedbackService.successMessage();
        // await new Promise((resolve) => setTimeout(resolve, 500));
        // navigate("/");
        // return response;
      } catch (error) {
        errorMsg(
          "Can't to create card you have sever error " + error.response?.status
        );
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
