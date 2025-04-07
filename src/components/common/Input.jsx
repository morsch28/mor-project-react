function Input({ error, ...rest }) {
  return (
    <div>
      <div className="mb-3">
        <input
          {...rest}
          type={rest.type || "text"}
          className={[
            rest?.type != "checkbox" && "form-control",
            error ? "is-invalid" : "",
          ].join(" ")}
          id={rest.name}
          aria-describedby="emailHelp"
        />
        {rest?.label && rest?.type == "checkbox" && (
          <label className="ms-3">{rest.label}</label>
        )}
        <div className="text-danger invalid-feedback">{error}</div>
      </div>
    </div>
  );
}

export default Input;
