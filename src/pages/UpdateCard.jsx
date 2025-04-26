import { useFormik } from "formik";
import Joi from "joi";
import { useNavigate, useParams } from "react-router";
import PageHeader from "../components/common/PageHeader";
import CardForm from "../components/CardForm";
import { useCards } from "../hooks/useCards";
import { useEffect, useState } from "react";
import cardService from "../services/cardService";
import { normalizeCards } from "../cards/normalizeCards";
import feedbackService from "../services/feedbackService";

function UpdateCard() {
  const { handleUpdateCard } = useCards();
  let navigate = useNavigate();

  const [cardToUpdate, setCardUpdate] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const loadCard = async () => {
      try {
        const getCardToUpdate = await cardService.getCardById(id);
        setCardUpdate(getCardToUpdate.data);
        return getCardToUpdate;
      } catch (error) {
        console.log(error);
      }
    };
    loadCard();
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: cardToUpdate?.title || "",
      subtitle: cardToUpdate?.subtitle || "",
      description: cardToUpdate?.description || "",
      phone: cardToUpdate?.phone || "",
      email: cardToUpdate?.email || "",
      web: cardToUpdate?.web || "",
      url: cardToUpdate?.url || "",
      alt: cardToUpdate?.alt || "",
      state: cardToUpdate?.address?.state || "",
      country: cardToUpdate?.address?.country || "",
      city: cardToUpdate?.address?.city || "",
      street: cardToUpdate?.address?.street || "",
      houseNumber: cardToUpdate?.address?.houseNumber || "",
      zip: cardToUpdate?.address?.zip || "",
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
        houseNumber: Joi.number().min(1).required(),
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
      console.log("onSubmit Called");
      try {
        if (cardToUpdate) {
          const normalizeCard = normalizeCards(values);
          const response = await handleUpdateCard(
            cardToUpdate._id,
            normalizeCard
          );
          feedbackService.updateSuccessful();
          await new Promise((resolve) => setTimeout(resolve, 500));
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
      {cardToUpdate && <CardForm formik={formik} />}
    </>
  );
}

export default UpdateCard;
