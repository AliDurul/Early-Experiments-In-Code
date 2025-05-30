import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "../pages/home/Home"
import About from "../pages/about/About"
import Projects from "../pages/projects/Projects"


const Router = () => {
    return (
        <div className="home-bgImg-container">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default Router