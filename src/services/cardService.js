import httpServices from "./httpService";

function getAllCardsService() {
  return httpServices.get("/cards");
}

async function CreateNewCard(normalizeCard) {
  userService.refreshToken();
  try {
    const response = httpServices.post("/cards", normalizeCard);
    return response;
  } catch (error) {
    console.log(error);
  }
}

const cardService = {
  getAllCardsService,
  CreateNewCard,
};

export default cardService;
