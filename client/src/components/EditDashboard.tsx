import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useLoaderData, useRevalidator } from "react-router-dom";
import "../styles/editdashboard.css";
import { editJedi } from "../services/request";

export default function EditDashboard() {
  const jedis = useLoaderData() as JediTypes[];
  const { revalidate } = useRevalidator();
  const API = import.meta.env.VITE_API_URL;
  const [jediToDelete, setJediToDelete] = useState<JediTypes | null>(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  useEffect(() => {
    if (showDeleteConfirmation && jediToDelete) {
      deleteDialogRef.current?.showModal();
    }
  }, [showDeleteConfirmation, jediToDelete]);

  const deleteJedi = (id: number) => {
    return axios
      .delete(`${API}/api/person/${id}`)
      .then(() => {
        revalidate();
        setJediToDelete(null);
        setShowDeleteConfirmation(false);
      })
      .catch((error) => console.error(error));
  };

  const [updatedJedi, setUpdatedJedi] = useState({
    id: Number(),
    name: "",
    age: Number(),
    description: "",
    img: "",
    power: "",
  });

  const handleEditJedi = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editJedi(updatedJedi.id, updatedJedi)
      .then(() => {
        revalidate();
        closeModal();
      })
      .catch((error) => {
        console.error("Erreur lors de la mise à jour du Jedi :", error);
      });
  };

  const handleChangeJediForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedJedi({ ...updatedJedi, [e.target.name]: e.target.value });
  };

  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const deleteDialogRef = useRef<HTMLDialogElement | null>(null);

  const openModal = (jedis: JediTypes) => {
    setUpdatedJedi(jedis);
    dialogRef.current?.showModal();
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    dialogRef.current?.close();
    document.body.style.overflow = "";
  };

  const openDeleteModal = (jedis: JediTypes) => {
    setJediToDelete(jedis);
    setShowDeleteConfirmation(true);
  };

  const closeDeleteModal = () => {
    setShowDeleteConfirmation(false);
    setJediToDelete(null);
    deleteDialogRef.current?.close();
  };

  return (
    <section className="list-jedi">
      {jedis.map((jedi) => (
        <section className="jedi-edit" key={jedi.id}>
          <div className="dashboard-jedilist">
            <p>{jedi.name}</p>
          </div>
          <div className="button-edit">
            <button type="button" onClick={() => openModal(jedi)}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/32/32355.png"
                alt="Edit"
              />
            </button>
            <button type="button" onClick={() => openDeleteModal(jedi)}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgy6cH4pk8uBtQ-_MBHx5MtDO8ms62KxR0UQ&s"
                alt="Delete"
              />
            </button>
          </div>
        </section>
      ))}
      {showDeleteConfirmation && (
        <dialog
          ref={deleteDialogRef}
          className="confirmation-modal"
          onClick={closeDeleteModal}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              closeDeleteModal();
            }
          }}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            tabIndex={-1}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                e.stopPropagation();
              }
            }}
          >
            <p>
              Êtes-vous sûr de vouloir supprimer{" "}
              <strong>{jediToDelete?.name}</strong> ?
            </p>
            <div className="confirmation-buttons">
              <button
                type="button"
                className="confirm-button"
                onClick={() =>
                  jediToDelete !== null && deleteJedi(jediToDelete.id)
                }
              >
                Confirmer
              </button>
              <button
                type="button"
                className="cancel-button"
                onClick={closeDeleteModal}
              >
                Annuler
              </button>
            </div>
          </div>
        </dialog>
      )}
      <dialog
        ref={dialogRef}
        className="modal"
        onClick={closeModal}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            closeModal();
          }
        }}
      >
        <div
          className="modal-content"
          onClick={(e) => e.stopPropagation()}
          tabIndex={-1}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              e.stopPropagation();
            }
          }}
        >
          {updatedJedi && (
            <form onSubmit={handleEditJedi} className="form-dashboard">
              <p>Nom du personnage</p>
              <input
                type="text"
                value={updatedJedi.name}
                name="name"
                placeholder="Nom du Jedi"
                onChange={handleChangeJediForm}
              />
              <p>Age</p>
              <input
                type="number"
                value={updatedJedi.age}
                name="age"
                id=""
                placeholder="Age"
                onChange={handleChangeJediForm}
              />
              <p>Description</p>
              <input
                type="text"
                value={updatedJedi.description}
                name="description"
                placeholder="Description"
                onChange={handleChangeJediForm}
              />
              <p>Image</p>
              <input
                type="text"
                id="release_year"
                value={updatedJedi.img}
                name="img"
                placeholder="URL image"
                onChange={handleChangeJediForm}
              />
              <p>Pouvoir</p>
              <input
                type="text"
                value={updatedJedi.power}
                name="power"
                placeholder="Pouvoir"
                onChange={handleChangeJediForm}
              />
              <button type="submit" className="modify-form">
                Modifier
              </button>
              <button
                type="submit"
                className="close-modal"
                onClick={closeModal}
              >
                Fermer
              </button>
            </form>
          )}
        </div>
      </dialog>
    </section>
  );
}
