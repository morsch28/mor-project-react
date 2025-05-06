import UpdateCard from "../pages/UpdateCard";
import Input from "./common/Input";

function CardForm({ formik }) {
  const { handleSubmit, getFieldProps, touched, errors } = formik;
  return (
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
  );
}

export default CardForm;
