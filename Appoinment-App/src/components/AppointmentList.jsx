import React, { useState } from "react";

const AppointmentList = ({ item, name }) => {
  const [isConsulted, setisConsulted] = useState(false);

  const handleCroos = (e) => {
    // console.log(e.target.offsetParent);
    // e.target.offsetParent.className = "none";
    e.target.offsetParent.remove();
  };

  return (
    <div
      className=" relative d-flex justify-content-between border border-success rounded-3 mt-3 p-2 "
      onDoubleClick={() => setisConsulted(!isConsulted)}
    >
      {/* //? **************** */}
      {isConsulted ? (
        <div className=" bg-danger absolite">consulted</div>
      ) : null}
      {/* //? *********************** */}
      <div>
        <h4>{item.patientName}</h4>
        <h5>{name}</h5>
      </div>
      <div>
        <h5>Time</h5>
        <h6>{item.dataTime}</h6>
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
export default AppointmentList;
