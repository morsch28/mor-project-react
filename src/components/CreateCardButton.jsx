import { useNavigate } from "react-router-dom";

function CreateCardButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/create-card")}
      className="btn btn-danger "
      id="create-card"
    >
      Create Card +
    </button>
  );
}

export default CreateCardButton;
