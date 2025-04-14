import httpServices from "./httpService";

function getAllCardsService() {
  return httpServices.get("/cards");
}

async function getCardById(id) {
  try {
    const response = await httpServices.get(`/cards/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function getAllMyCards() {
  try {
    const response = await httpServices.get("/cards/my-cards");
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function cardLike(id) {
  try {
    const response = await httpServices.patch(`/cards/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function CreateNewCard(normalizeCard) {
  try {
    const response = await httpServices.post("/cards", normalizeCard);
    return response;
  } catch (error) {
    console.log(error);
  }
}
async function deleteCard(id) {
  try {
    const response = await httpServices.delete(`/cards/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function updateCard(id) {
  try {
    const response = await httpServices.put(`/cards/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

const cardService = {
  getAllCardsService,
  getCardById,
  CreateNewCard,
  cardLike,
  getAllMyCards,
  deleteCard,
  updateCard,
};

export default cardService;
