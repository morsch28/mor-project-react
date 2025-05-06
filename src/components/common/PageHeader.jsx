function PageHeader({ title, description }) {
  return (
    <div className="container d-flex flex-column align-items-center  my-4 gap-4">
      <h1 className="text-nowrap" style={{ fontSize: "50px" }}>
        {title}
      </h1>
      <p className="fw-bold fs-5">{description}</p>
    </div>
  );
}

export default PageHeader;
