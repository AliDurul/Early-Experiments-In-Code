const taxRate = 0.18;
const shippingPrice = 25.99;
const freeShippingPrice = 3000;

//localStorage vs. sessionStorage
window.addEventListener("load", () => {
  localStorage.setItem("taxRate", taxRate);
  localStorage.setItem("shippingPrice", shippingPrice);
  localStorage.setItem("freeShippingPrice", freeShippingPrice);

  ///total cart calc.
  calculateCartPrice();
});

const navbarList = document.querySelector(".nav__list");
const productList = document.querySelector("div.main__product-painel");

//capturing
navbarList.addEventListener("click", (e) => {
  if (e.target.getAttribute("class") == "nav__list--btn" || "fa-regular fa-trash-can") {
      //e.target.parentElement.firstElementChild.innerText = "My Cart";
      //e.target.previousElementSibling.innerText = "My Cart";
      //e.target vs. e.currentTarget
      //foreach ==> array, nodeList
      productList.innerText = "No Product!";
      e.currentTarget.firstElementChild.innerText = "My Cart";
      calculateCartPrice();
  }
});

//capturing
productList.addEventListener("click", (e)=>{
  //minus
  if(e.target.className == "fa-solid fa-minus"){
      if(e.target.nextElementSibling.innerText > 1){
          e.target.nextElementSibling.innerText --;
          calculateProductPrice(e.target);
      }
      else{
          if(confirm(`${e.target.closest(".main__product-info").querySelector("h2").innerText} will be removed!`)){
              e.target.closest(".main__product").remove();   
              calculateCartPrice();
          }
      }
  }
  //plus
  else if(e.target.classList.contains("fa-plus")){
      e.target.previousElementSibling.innerText ++;
      calculateProductPrice(e.target);
  }
  //remove
  else if(e.target.id == "remove-product"){
      if(confirm(`${e.target.closest(".main__product-info").querySelector("h2").innerText} will be removed!`)){
          e.target.closest(".main__product").remove(); 
          calculateCartPrice();
      }
  }
  else{
      alert("other element clicked");
  }
  //calculateCartPrice();
});

//target == minus || plus btn 
const calculateProductPrice = (btn) =>{
  //product line calculations
  const infoDiv =  btn.closest(".main__product-info");
  //console.log(infoDiv);
  const price = infoDiv.querySelector(".main__product-price strong").innerText;
  //console.log(price);
  const quantity = infoDiv.querySelector("#quantity").innerText;
  console.log(quantity);
  infoDiv.querySelector(".main__product-line-price").innerText = (price * quantity).toFixed(2);
  // console.log(typeof (price * quantity).toFixed(2));
  calculateCartPrice();
}

const calculateCartPrice = () =>{
  //cart total calculations
  const productPriceDivs = productList.querySelectorAll(".main__product-line-price");
  let subtotal = 0;
  //reduce calculation
  productPriceDivs.forEach(price=>{
      subtotal += parseFloat(price.innerText);
  });
  console.log(subtotal);
  const taxPrice = parseFloat(subtotal * localStorage.getItem("taxRate")); 
  console.log(taxPrice);

  const shippingPrice = subtotal > 0 && subtotal < localStorage.getItem("freeShippingPrice") ? parseFloat(localStorage.getItem("shippingPrice")) : 0;

  const totalPrice = (subtotal + shippingPrice + taxPrice).toFixed(2);
  console.log(totalPrice);

  document.querySelector(".main__total h2").innerText = subtotal.toFixed(2);
  document.querySelector("#cart-shipping span:nth-child(2)").innerText = shippingPrice.toFixed(2);
  document.querySelector("#cart-tax span:nth-child(2)").innerText = taxPrice.toFixed(2);
  document.querySelector("#cart-total").lastElementChild.innerText = totalPrice;

  if(productList.querySelectorAll(".main__product").length == 0){
      productList.innerText = "No Product!";
      navbarList.firstElementChild.innerText = "My Cart";
  }
  else{
      navbarList.firstElementChild.innerText = `My Cart (${productList.querySelectorAll(".main__product").length} Products)`;
  }

}

