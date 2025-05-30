import { useEffect, useState } from "react"
import AddTutorial from "../components/AddTutorial"
import TutorialList from "../components/TutorialList"
import axios from "axios"

const Home = () => {
  const [tutorials, setTutorials] = useState([])

  const getTutorials = async () => {
    // const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/"
    const BASE_URL = "http://127.0.0.1:8000/todo"
    try {
      // const res = await axios(BASE_URL)
      // setTutorials(res.data)
      const { data: { data } } = await axios(BASE_URL)
      setTutorials(data)
    } catch (error) {
      console.log(error)
    }
  }



  console.log(tutorials)

  //? Mount asamasinda api'ye istek atiyoruz
  useEffect(() => {
    getTutorials()
  }, [])

  return (
    <>
      <AddTutorial getTutorials={getTutorials} />
      <TutorialList tutorials={tutorials} getTutorials={getTutorials} />
    </>
  )
}

export default Home
