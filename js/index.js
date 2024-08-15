function findElement(select, selector = document) {
  return selector.querySelector(select);
}
let products = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : [
      {
        id: 1,
        topImg: "./images/office.svg",
        title: "Вариативный замок Golden Soft для отеля",
        discountPrice: "7 000₽",
        realPrice: "8 000₽",
        categories: "",
        hasIsCard: "",
        aLot1:
          "Вариативный замок Golden Soft для отеля Вариативный замок Golden Soft для отеля Вариативный замок Golden Soft для отеля Вариативный замок Golden Soft для отеля",
        aLot2:
          "Вариативный замок Golden Soft для отеля Вариативный замок Golden Soft для отеля Вариативный замок Golden Soft для отеля",
      },
      {
        id: 2,
        topImg: "./images/for-me.png",
        title: "Дверной Замок Golden Soft для офиса",
        discountPrice: "33 000₽",
        realPrice: "39 809₽",
        categories: "",
        hasIsCard: "",
        aLot1:
          "Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса",
        aLot2:
          "Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса",
      },
      {
        id: 3,
        topImg: "./images/for-children.png",
        title: "Крутой Замок Golden Soft для ресторанта",
        discountPrice: "9 000₽",
        realPrice: "12 000₽",
        categories: "",
        hasIsCard: "",
        aLot1:
          "Крутой Замок Golden Soft для ресторанта Крутой Замок Golden Soft для ресторанта Крутой Замок Golden Soft для ресторанта Крутой Замок Golden Soft для ресторанта",
        aLot2:
          "Крутой Замок Golden Soft для ресторанта Крутой Замок Golden Soft для ресторанта Крутой Замок Golden Soft для ресторанта",
      },
      {
        id: 4,
        topImg: "./images/office.png",
        title: "Вариативный замок Golden Soft для отеля",
        discountPrice: "7 000₽",
        realPrice: "8 000₽",
        categories: "",
        hasIsCard: "",
        aLot1:
          "Вариативный замок Golden Soft для отеля Вариативный замок Golden Soft для отеля Вариативный замок Golden Soft для отеля Вариативный замок Golden Soft для отеля",
        aLot2:
          "Вариативный замок Golden Soft для отеля Вариативный замок Golden Soft для отеля Вариативный замок Golden Soft для отеля",
      },
      {
        id: 5,
        topImg: "./images/for-me.png",
        title: "Дверной Замок Golden Soft для офиса",
        discountPrice: "33 000₽",
        realPrice: "39 809₽",
        categories: "",
        hasIsCard: "",
        aLot1:
          "Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса",
        aLot2:
          "Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса",
      },
      {
        id: 6,
        topImg: "./images/for-children.png",
        title: "Крутой Замок Golden Soft для ресторанта",
        discountPrice: "9 000₽",
        realPrice: "12 000₽",
        categories: "",
        hasIsCard: "",
        aLot1:
          "Крутой Замок Golden Soft для ресторанта Крутой Замок Golden Soft для ресторанта Крутой Замок Golden Soft для ресторанта Крутой Замок Golden Soft для ресторанта",
        aLot2:
          "Крутой Замок Golden Soft для ресторанта Крутой Замок Golden Soft для ресторанта Крутой Замок Golden Soft для ресторанта",
      },
      {
        id: 7,
        topImg: "./images/office.png",
        title: "Вариативный замок Golden Soft для отеля",
        discountPrice: "7 000₽",
        realPrice: "8 000₽",
        categories: "",
        hasIsCard: "",
        aLot1:
          "Вариативный замок Golden Soft для отеля Вариативный замок Golden Soft для отеля Вариативный замок Golden Soft для отеля Вариативный замок Golden Soft для отеля",
        aLot2:
          "Вариативный замок Golden Soft для отеля Вариативный замок Golden Soft для отеля Вариативный замок Golden Soft для отеля",
      },
      {
        id: 8,
        topImg: "./images/for-me.png",
        title: "Дверной Замок Golden Soft для офиса",
        discountPrice: "33 000₽",
        realPrice: "39 809₽",
        categories: "",
        hasIsCard: "",
        aLot1:
          "Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса",
        aLot2:
          "Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса",
      },
      {
        id: 9,
        topImg: "./images/for-children.png",
        title: "Крутой Замок Golden Soft для ресторанта",
        discountPrice: "9 000₽",
        realPrice: "12 000₽",
        categories: "",
        hasIsCard: "",
        aLot1:
          "Крутой Замок Golden Soft для ресторанта Крутой Замок Golden Soft для ресторанта Крутой Замок Golden Soft для ресторанта Крутой Замок Golden Soft для ресторанта",
        aLot2:
          "Крутой Замок Golden Soft для ресторанта Крутой Замок Golden Soft для ресторанта Крутой Замок Golden Soft для ресторанта",
      },
      {
        id: 10,
        topImg: "./images/office.png",
        title: "Вариативный замок Golden Soft для отеля",
        discountPrice: "7 000₽",
        realPrice: "8 000₽",
        categories: "",
        hasIsCard: "",
        aLot1:
          "Вариативный замок Golden Soft для отеля Вариативный замок Golden Soft для отеля Вариативный замок Golden Soft для отеля Вариативный замок Golden Soft для отеля",
        aLot2:
          "Вариативный замок Golden Soft для отеля Вариативный замок Golden Soft для отеля Вариативный замок Golden Soft для отеля",
      },
      {
        id: 11,
        topImg: "./images/for-me.png",
        title: "Дверной Замок Golden Soft для офиса",
        discountPrice: "33 000₽",
        realPrice: "39 809₽",
        categories: "",
        hasIsCard: "",
        aLot1:
          "Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса",
        aLot2:
          "Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса",
      },
      {
        id: 12,
        topImg: "./images/for-children.png",
        title: "Крутой Замок Golden Soft для ресторанта",
        discountPrice: "9 000₽",
        realPrice: "12 000₽",
        categories: "",
        aLot: "Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса",
        aLot2:
          "Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса",
        hasIsCard: "",
      },
    ];
// localStorage.setItem("products", JSON.stringify(products));
const elWrapper = findElement(".hero-right");
const newTem = findElement("#template");
const startValInp = findElement(".inp1");
const endtValInp = findElement(".inp2");

function createCards(items) {
  elWrapper.textContent = null;
  let createCards = items.map((item) => {
    const newEl = newTem.content.cloneNode(true);

    const topImg = findElement(".hero-right-one-center-img", newEl);
    const title = findElement(".hero-right-one-title-tit", newEl);
    const realPrice = findElement(".hero-right-one-prices-real-value", newEl);
    const discountPrice = findElement(
      ".hero-right-one-prices-discount-value",
      newEl
    );
    const addToCard = findElement(".card", newEl);

    addToCard.dataset.id = item.id;
    topImg.src = item.topImg;
    topImg.dataset.id = item.id;
    title.textContent = item.title;
    realPrice.textContent = item.realPrice;
    discountPrice.textContent = item.discountPrice;

    elWrapper.appendChild(newEl);
  });
}
createCards(products);

elWrapper.addEventListener("click", (evt) => {
  console.log("clicked");

  if (evt.target.className.includes("hero-right-one-center-img")) {
    const id = evt.target.dataset.id;
    localStorage.setItem("id", id);
  }
});
