import { doctorData } from "../helpers/data";
const Doctors = ({ handleShow }) => {
  return (
    <div className="container text-center mt-4">
      <h1>ANATOLİAN HOSPITAL</h1>
      <h3>Our Doctors</h3>
      <div className="d-flex flex-wrap gap-4 justify-content-center">
        {doctorData.map((doc, i) => {
          const { name, dep, img, id } = doc;
          return (
            <div
              key={id}
              className="card text-center justify border"
              style={{ width: "15.2rem" }}
            >
              <img
                onClick={handleShow}
                src={img}
                className="card-img-top"
                alt={name}
              />
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{dep} </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Doctors;
