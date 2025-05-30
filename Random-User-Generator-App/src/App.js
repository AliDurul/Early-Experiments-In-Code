import React, { useEffect, useState } from "react";

/* import Footer from "./components/footer/Footer"; */

import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  /* ASYNC FUNCTION WITH FETCH */
  /*  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data.results[0];
  };
  
  useEffect(() => {
    getData()
    .then((data) => setRandomPerson(data))
    .catch((err) => console.log(err.mese));
  }, []); */

  /* // AXIOS 
  axios.get(url).then((res) => console.log(res.data.results[0])); */

  return (
    <main>
      <Header />
      <Card />
      {/* <div style={{ display: "flex", justifyContent: "center" }}>
        <Footer />
      </div> */}
    </main>
  );
}

export default App;
