import Swal from "sweetalert2";

function successMessage() {
  Swal.fire({
    title: "Yes!",
    text: "Card created successfully",
    icon: "success",
  });
}

function updateSuccessful() {
  Swal.fire({
    title: "Success",
    icon: "success",
    text: "The card was updated successfully",
  });
}

function updateMessage() {
  return new Promise((resolve) => {
    Swal.fire({
      icon: "warning",
      text: "Are you sure you want to update the card details?",
      showConfirmButton: true,
      confirmButtonText: "Ok",
      cancelButtonText: "Cancel",
      showCancelButton: true,
    }).then((result) => {
      resolve(result.isConfirmed);
    });
  });
}

function deleteMessage() {
  return new Promise((resolve) => {
    Swal.fire({
      icon: "error",
      text: "Are you sure you want to delete this card?",
      showConfirmButton: true,
      confirmButtonText: "Ok",
      cancelButtonText: "Cancel",
      showCancelButton: true,
    }).then((result) => {
      resolve(result.isConfirmed);
    });
  });
}

const message = {
  successMessage,
  updateMessage,
  updateSuccessful,
  deleteMessage,
};
export default message;
