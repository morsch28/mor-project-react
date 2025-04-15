import { useFormik } from "formik";
import Input from "./common/Input";
import Joi from "joi";
import { normalizeCards } from "../cards/normalizeCards";
import cardService from "../services/cardService";
import { useNavigate } from "react-router";
import PageHeader from "./common/PageHeader";

function CreateNewCard() {
  let navigate = useNavigate();
  const { handleSubmit, getFieldProps, touched, errors } = useFormik({
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
        const normalizeCard = normalizeCards(values);
        const response = await cardService.CreateNewCard(normalizeCard);
        console.log(response);
        navigate("/");
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
      <form className="w-50" onSubmit={handleSubmit}>
        <Input
          {...getFieldProps("title")}
          error={touched.title && errors.title}
          placeholder="Title"
        />
        <Input
          {...getFieldProps("subtitle")}
          error={touched.subtitle && errors.subtitle}
          placeholder="SubTitle"
        />
        <Input
          {...getFieldProps("description")}
          error={touched.description && errors.description}
          placeholder="Description"
        />
        <Input
          {...getFieldProps("phone")}
          error={touched.phone && errors.phone}
          placeholder="Phone"
        />
        <Input
          {...getFieldProps("email")}
          error={touched.email && errors.email}
          placeholder="Email"
        />
        <Input
          {...getFieldProps("web")}
          error={touched.web && errors.web}
          placeholder="Web"
        />
        <div className="row">
          <div className="col-6">
            <Input
              {...getFieldProps("url")}
              error={touched.url && errors.url}
              placeholder="url"
            />
          </div>
          <div className="col-6">
            <Input
              {...getFieldProps("alt")}
              error={touched.alt && errors.alt}
              placeholder="alt"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <Input
              {...getFieldProps("state")}
              error={touched.state && errors.state}
              placeholder="State"
            />
          </div>
          <div className="col-4">
            <Input
              {...getFieldProps("country")}
              error={touched.country && errors.country}
              placeholder="Country"
            />
          </div>
          <div className="col-4">
            <Input
              {...getFieldProps("city")}
              error={touched.city && errors.city}
              placeholder="City"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <Input
              {...getFieldProps("street")}
              error={touched.street && errors.street}
              placeholder="Street"
            />
          </div>
          <div className="col-4">
            <Input
              {...getFieldProps("houseNumber")}
              error={touched.houseNumber && errors.houseNumber}
              placeholder="House Number"
            />
          </div>
          <div className="col-4">
            <Input
              {...getFieldProps("zip")}
              error={touched.zip && errors.zip}
              placeholder="Zip code"
            />
          </div>
        </div>
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    </>
  );
}

export default CreateNewCard;
