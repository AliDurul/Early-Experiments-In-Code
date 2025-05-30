import { useState } from "react"
import axios from "axios"

const AddTutorial = ({ getTutorials }) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTutor = { title: title, description: description }
    console.log(newTutor)
    postTutorial(newTutor)
    
    setTitle("")
    setDescription("")
  }

  const postTutorial = async (newTutor) => {
    // const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/"
    const BASE_URL = "http://127.0.0.1:8000/todo"
    try {
      const res = await axios.post(BASE_URL, newTutor)
      console.log(res)
    } catch (error) {
      console.log(error)
    }

    //? Tum tutorial'lari iste ve state'i guncelle
    getTutorials()
  }

  return (
    <div className="container text-center mt-4">
      <h1 className="display-6 text-danger">Add Your Tutorial</h1>
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-danger mb-4">
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddTutorial
