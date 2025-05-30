import "../scss/style.scss";

const Card = ({ data }) => {
  //   console.log(a);
  //   console.log(data);
  return (
    <div className="d-flex flex-wrap gap-3 justify-content-center">
      {data.map((item) => {
        return (
          <div className="card" style={{ width: "300px" }}>
            <div className="img-div" style={{ height: "40vh" }}>
              <img src={item.src.large} className="card-img-top" alt="..." />
            </div>
            <div className="card-body">
              <p className="card-text text-primary">{item.photographer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
