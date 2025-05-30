const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msgSpan = document.querySelector(".container .msg");
const coinList = document.querySelector(".ajax-section .container .coins");
//
localStorage.setItem(
  "apiKey",
  EncryptStringAES(
    "coinranking772f9ce3a5c8ea81c12b209ce13faf6829e06b6a18df32b7"
  )
);
/* addEventListenes*/
//1
form.addEventListener("submit", (e) => {
  //2
  e.preventDefault();

  // 2
  if (input.value === "") return;
  //3
  getCoinDataFromAi();


  form.reset();
  form.focus();
});

/* Functions */
//3
const getCoinDataFromAi = () => {
//4
  const API_KEY = DecryptStringAES(localStorage.getItem("apiKey"));
  const URL = `https://api.coinranking.com/v2/coins?search=${input.value}&limit=1`;
//5
  const options = {
    headers: {
      "x-access-token": API_KEY,
    },
  };

  fetch(URL, options)
    .then((response) => {
        if(!response.ok){
            throw new Error(`With ${response.status} Code`)
        }
      return response.json();
    })
    .then((result) => displayCoin(result))// 6
    .catch((err) => errorMsg(err)); //5.5
};

//6
const displayCoin = (result) => {
//destructering
//7
const { symbol, name, iconUrl, change, price } = result.data.coins[0];

//10
  // check for duplicate cards
if(checkForDuplicate(name)) return;

//8
//creating new li element
  const createdli = document.createElement("li");
  createdli.classList.add("coin");
  createdli.innerHTML = `
    <h2 class="coin-name" data-name=${name}>
        <span>${name}</span>
        <sup>${symbol}</sup>
    </h2>
    <div class="coin-temp">$${Number(price).toFixed(6)}</div>
    <figure>
        <img class="coin-icon" src=${iconUrl}>                
            <figcaption style='color:${change < 0 ? "red" : "green"}'>
                <span><i class="fa-solid fa-chart-line"></i></span>
                <span>${change}%</span>
            </figcaption>
    </figure>
    <span class="remove-icon">
        <i class="fas fa-window-close" style="color:red"></i>
    </span>
    `;
  coinList.prepend(createdli);
  //invoke delete functions
//9
  deleteCoinCard();
};

//10
const checkForDuplicate = (name) => {
  const coinName = document.querySelectorAll(".coins h2 span");

  const filteredCoinName = [...coinName].filter(
    (span) => span.innerText == name
  );
  
  console.log(filteredCoinName.length);
  if (filteredCoinName.length) {
    msgSpan.innerText = `You already know the data for ${name}, Please search for another coin 😉`;
    setTimeout(() => {
      msgSpan.innerText = ''
    },3000)
    return true;
  }
};
//9
const deleteCoinCard = () => {
  const removeIcon = document.querySelector(".remove-icon");

  removeIcon.addEventListener("click", (e) => {
    e.target.closest("li").remove();
  });
};
//5.5
const errorMsg = (err) => {
    msgSpan.innerText = `Coin not found!! ${err}`;
    setTimeout(() => {
        msgSpan.innerText = "";
    }, 3000);
}