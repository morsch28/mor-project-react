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
            "py-3",
          ].join(" ")}
          id={rest.name}
          aria-describedby="emailHelp"
          checked={rest?.type == "checkbox" && rest?.value}
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
