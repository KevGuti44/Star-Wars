import axios from "axios";
import { useState } from "react";
import "../styles/formdashboard.css";

export default function FormDashboard() {
  const [newJedi, setNewJedi] = useState({
    name: "",
    age: Number(),
    description: "",
    img: "",
    power: "",
  });

  const API = import.meta.env.VITE_API_URL;
  const sendForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post(`${API}/api/person/`, newJedi)
      .then((response) => {
        if (response.status === 201) {
        } else {
          alert(response.data.error);
        }
      })
      .catch((error) => console.error(error));
  };

  const handleChangeJediForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewJedi({ ...newJedi, [e.target.name]: e.target.value });
  };
  console.info(newJedi);
  return (
    <form onSubmit={sendForm} className="form-dashboard">
      <p>Nom</p>
      <input
        type="text"
        name="name"
        value={newJedi.name}
        onChange={handleChangeJediForm}
        placeholder="Nom du personnage "
      />
      <p>Age</p>
      <input
        type="number"
        name="age"
        onChange={handleChangeJediForm}
        id=""
        placeholder="Age"
      />
      <p>Description</p>
      <input
        type="text"
        name="description"
        onChange={handleChangeJediForm}
        placeholder="description"
      />
      <p>Image</p>
      <input
        type="text"
        name="img"
        onChange={handleChangeJediForm}
        placeholder="URL"
      />
      <p>Pouvoir</p>
      <input
        type="text"
        name="power"
        onChange={handleChangeJediForm}
        placeholder="Pouvoir"
      />

      <input type="submit" className="submit-form" />
    </form>
  );
}
