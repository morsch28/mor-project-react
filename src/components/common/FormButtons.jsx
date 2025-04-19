function FormButton({ navigate, isValid }) {
  return (
    <div className="d-flex mb-3 justify-content-center gap-3 flex-column">
      <div className="d-flex gap-2">
        <button
          onClick={() => navigate("/")}
          className="w-50 text-danger fw-bold fs-6 border-danger py-2"
        >
          cancel
        </button>
        <button className="w-50">
          <i className="fa fa-refresh"></i>
        </button>
      </div>
      <button
        disabled={!isValid}
        type="submit"
        className="btn btn-primary w-100 mb-5 py-2"
      >
        Submit
      </button>
    </div>
  );
}

export default FormButton;
