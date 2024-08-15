const oneImg = document.querySelector(".single-img");
const oneTitle = document.querySelector(".single-right-title");
const oneALot1 = document.querySelector(".single-right-text");
const oneALot2 = document.querySelector(".single-right-text2");
const oneDiscountPrice = document.querySelector(".single-right-prices-val1");
const oneRealPrice = document.querySelector(".single-right-prices-val2");

const id = localStorage.getItem("id");
console.log(id);
const products = JSON.parse(localStorage.getItem("products"));
const product = products.filter(
  (item) => item.id == id

  //   return item;
)[0];
oneImg.src = product.topImg;
oneTitle.textContent = product.title;
oneALot1.textContent = product.aLot1;
oneALot2.textContent = product.aLot2;
oneDiscountPrice.textContent = product.discountPrice;
oneRealPrice.textContent = product.realPrice;
