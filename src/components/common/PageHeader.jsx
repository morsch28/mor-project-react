function PageHeader({ title, description }) {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default PageHeader;
