import { useState } from "react";
import AddModal from "../components/AddModal";
import Doctors from "../components/Doctors";
const Home = () => {
  const [show, setShow] = useState(false);
  const [dName, setDName] = useState("");
  const handleClose = (e) => {
    setShow(false);
  };
  const handleShow = (e) => {
    setDName(e.target.alt);
    setShow(true);
  };
  return (
    <div>
      <Doctors handleShow={handleShow} />
      <AddModal handleClose={handleClose} show={show} dName={dName} />
    </div>
  );
};
export default Home;
