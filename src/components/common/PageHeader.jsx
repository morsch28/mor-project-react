function PageHeader({ title, description }) {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center my-4">
      <h1 className="fs-1">{title}</h1>
      <p className="fw-bold fs-5">{description}</p>
    </div>
  );
}

export default PageHeader;
