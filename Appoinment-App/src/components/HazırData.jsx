import { useState } from "react";

const HazırData = ({ item }) => {
  const [isConsulted, setisConsulted] = useState(item.consulted);

  const handleCroos = (e) => {
    // console.log(e.target.offsetParent);
    // e.target.offsetParent.className = "none";
    e.target.offsetParent.remove();
  };
  return (
    <div
      className="container relative d-flex justify-content-between border border-success rounded-3 mt-3 p-2 "
      onDoubleClick={() => setisConsulted(!isConsulted)}
    >
      {isConsulted ? (
        <div className=" bg-danger absolite">consulted</div>
      ) : null}

      <div>
        <h4>{item.patient}</h4>
        <h5>{item.doctor}</h5>
      </div>
      <div>
        <h5>time</h5>
        <h6>
          date={new Date().getHours()}:00 /{new Date().getFullYear()}/
          {new Date().getMinutes()}
        </h6>
      </div>
      <div>
        <button
          type="button"
          className="btn-close danger"
          aria-label="Close"
          onClick={handleCroos}
        />
      </div>
    </div>
  );
};

export default HazırData;
