import httpServices from "./httpService";

function getAllCardsService() {
  return httpServices.get("/cards");
}

async function getCardById(id) {
  try {
    const response = await httpServices.get(`/cards/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
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
  getCardById,
  CreateNewCard,
};

export default cardService;
