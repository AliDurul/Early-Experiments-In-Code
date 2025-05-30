import Card from "./Card";
import data from "../helpers/data";
const Main = () => {
  return (
    <div className="container-fluid">
      <h1 className="text-center text-warning mb-3">IMAGE GALLERY</h1>

      <Card data={data} />
    </div>
  );
};

export default Main;
