const countrySelect = document.querySelector(".country_select select");
const countryCard = document.querySelector(".country_card");

let contries = "";
/* addEventListener */
window.addEventListener("load", () => {
  getCountries();
});

countrySelect.addEventListener("change", (e) => {
  if ( e.target.value) {
    const selectedCountry = contries.filter( (country) => country.name.common ===  e.target.value  );
    displayCountryCard(selectedCountry[0])
}
});

/* functions */

const getCountries = () => {
  const URL =
    "https://restcountries.com/v3.1/all?fields=name,region,capital,currencies,population,flags,maps,borders,currencies,languages";

  fetch(URL)
    .then((res) => {
      if (!res.ok) {
        throw new Error("api ye ulasamadik");
      }
      return res.json();
    })
    .then((data) => getCountryName(data))
    .catch((err) => console.log(err));
};
/* fetching names of the country and write into select */
const getCountryName = (data) => {
  // console.log(data);

  contries = data;
  const nameArray = [];
  /* sorting of data */
  contries.forEach((country) => {
    nameArray.push(country.name.common);
  });
  nameArray.sort();
  /* display the names of the country in select */
  nameArray.forEach((name) => {
    countrySelect.innerHTML += `<option value="${name}">${name}</option>`;
  });
};

const displayCountryCard = (selectedCountry) => {
    console.log(selectedCountry);
    const {borders,capital,currencies,flags:{png},languages,maps:{googleMaps},name:{common},population,region} = selectedCountry;

    console.log(Object.values(currencies)[0].name);
    countryCard.innerHTML = `
    <div class="card m-auto" style="width: 22rem">
    <img src="${png}" class="card-img-top" alt="${common}" />
    <div class="card-body p-2">
      <h5 class="card-title">${common}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
          <i class="fa-solid fa-earth-oceania"></i><span class="fw-bold"> Region:</span> ${region}
      </li>
      <li class="list-group-item">
          <i class="fas fa-lg fa-landmark"></i>
            <span class="fw-bold"> Capitals:</span>${capital} 
      </li>
      <li class="list-group-item">
          <i class="fas fa-lg fa-comments"></i>
            <span class="fw-bold"> Languages:</span> ${Object.values(languages)}
      </li>
      <li class="list-group-item">
          <i class="fas fa-lg fa-money-bill-wave"></i>
            <span class="fw-bold"> Currencies:</span>${Object.values(currencies)[0].name}, ${Object.values(currencies)[0].symbol}
      </li>
      <li class="list-group-item">
          <i class="fa-solid fa-people-group"></i></i>
          <span class="fw-bold"> Population:</span> ${population}
      </li>
      <li class="list-group-item">
          <i class="fa-sharp fa-solid fa-road-barrier"></i>
          <span class="fw-bold"> Borders:</span>  ${borders ? borders : "None" }
      </li>
      <li class="list-group-item">
          <i class="fa-solid fa-map-location-dot"></i><span class="fw-bold"> Map:</span> <a href="${googleMaps}" target="_blank"> Go to google map</a> </li>
      </li>
    </ul>
  </div>`



}
