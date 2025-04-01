import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const JediCards = () => {
  return axios
    .get(`${API}/api/person/`)
    .then((response) => response.data)
    .catch((error) => console.error(error));
};
const getJediById = (id: number) => {
  return axios
    .get(`${API}/api/person/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
    });
};
// requete axios pour avoir les jedi par power
const getJedi = () => {
  return axios
    .get(`${API}/api/person/Jedi`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
    });
};
const getSith = () => {
  return axios
    .get(`${API}/api/person/Sith`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
    });
};
const editJedi = async (id: number, updatedJedi: JediTypes) => {
  try {
    const response = await axios.put(`${API}/api/person/${id}`, updatedJedi);
    return response;
  } catch (error) {
    console.error("Erreur lors de la mise à jour du Jedi :", error);
    throw error;
  }
};
export { JediCards, getJediById, getJedi, getSith, editJedi };
