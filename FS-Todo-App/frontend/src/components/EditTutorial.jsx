import axios from "axios";
import { useEffect, useState } from "react";

const EditTutorial = ({ editItem, getTutorials }) => {
  console.log(editItem);

  const { id, description: oldDescription, title: oldTitle } = editItem;
  console.log("old", oldTitle);
  console.log("old", oldDescription);
  //? https://react.dev/reference/react/useState#usestate
  //! State degiskeninin degeri, 1.render ile initialState
  //! parametresinin ilk degerini alir. Dolayisiyle bu durumda
  //! prop'tan gelen ilk deger state'e aktarilir.
  //! Sonradan degisen props degerleri useState'e aktarilmaz.
  //! Eger props'tan gelen degerleri her degisimde useState'e
  //! aktarmak istersek useEffect hook'unu componentDidUpdate
  //! gibi kullanabiriz.
  const [title, setTitle] = useState(oldTitle);
  const [description, setDescription] = useState(oldDescription);

  //? componentDidUpdate
  useEffect(() => {
    setTitle(oldTitle);
    setDescription(oldDescription);
    //? oldTitle veya oldDescriptiion her degistiginde local title ve description state'lerimizi guncelliyoruz.
  }, [oldTitle, oldDescription]);

  console.log(title); //ilk render da undefined
  console.log(description);

  const editTutor = async tutor => {
    // const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials";
    const BASE_URL = "http://127.0.0.1:8000/todo"


    try {
      await axios.put(`${BASE_URL}/${id}/`, tutor);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };
  const handleSubmit = e => {
    e.preventDefault();
    editTutor({ title, description });
  };

  return (
    <div
      className="modal fade"
      id="open-modal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title text-danger fs-5" id="exampleModalLabel">
              Edit Tutorial
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => {
                setDescription("");
                setTitle("");
              }}
            />
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Enter your title"
                  value={title || ""}
                  onChange={e => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="desc" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="desc"
                  placeholder="Enter your Description"
                  value={description || ""}
                  onChange={e => setDescription(e.target.value)}
                  required
                />
              </div>

              <div className="text-end">
                <button
                  type="submit"
                  className="btn btn-danger"
                  data-bs-dismiss="modal">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTutorial;
