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

export { JediCards, getJediById, getJedi };
