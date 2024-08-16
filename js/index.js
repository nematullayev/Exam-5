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
        discountPrice: 7000,
        realPrice: "8 000₽",
        categories: ["Yangi", "Ishga", "Eski", "Популярности"],
        hasIsCard: false,
        aLot1:
          "Вариативный замок Golden Soft для отеля Вариативный замок Golden Soft для отеля Вариативный замок Golden Soft для отеля Вариативный замок Golden Soft для отеля",
        aLot2:
          "Вариативный замок Golden Soft для отеля Вариативный замок Golden Soft для отеля Вариативный замок Golden Soft для отеля",
      },
      {
        id: 2,
        topImg: "./images/for-me.png",
        title: "Дверной Замок Golden Soft для офиса",
        discountPrice: 33000,
        realPrice: "39 809₽",
        categories: ["Yangi", "Eski", "Популярности"],
        hasIsCard: false,
        aLot1:
          "Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса",
        aLot2:
          "Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса",
      },
      {
        id: 3,
        topImg: "./images/for-children.png",
        title: "Крутой Замок Golden Soft для ресторанта",
        discountPrice: 9000,
        realPrice: "12 000₽",
        categories: ["Yangi", "Популярности"],
        hasIsCard: false,
        aLot1:
          "Крутой Замок Golden Soft для ресторанта Крутой Замок Golden Soft для ресторанта Крутой Замок Golden Soft для ресторанта Крутой Замок Golden Soft для ресторанта",
        aLot2:
          "Крутой Замок Golden Soft для ресторанта Крутой Замок Golden Soft для ресторанта Крутой Замок Golden Soft для ресторанта",
      },
      {
        id: 4,
        topImg: "./images/office.png",
        title: "Вариативный замок Golden Soft для отеля",
        discountPrice: 57000,
        realPrice: "8 000₽",
        categories: ["Yangi", "Ishga", "Популярности"],
        hasIsCard: false,
        aLot1:
          "Вариативный замок Golden Soft для отеля Вариативный замок Golden Soft для отеля Вариативный замок Golden Soft для отеля Вариативный замок Golden Soft для отеля",
        aLot2:
          "Вариативный замок Golden Soft для отеля Вариативный замок Golden Soft для отеля Вариативный замок Golden Soft для отеля",
      },
      {
        id: 5,
        topImg: "./images/for-me.png",
        title: "Дверной Замок Golden Soft для офиса",
        discountPrice: 39000,
        realPrice: "39 809₽",
        categories: ["Ishga", "Популярности"],
        hasIsCard: false,
        aLot1:
          "Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса",
        aLot2:
          "Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса",
      },
      {
        id: 6,
        topImg: "./images/for-children.png",
        title: "Крутой Замок Golden Soft для ресторанта",
        discountPrice: 92000,
        realPrice: "12 000₽",
        categories: ["Yangi", "Ishga", "Популярности"],
        hasIsCard: false,
        aLot1:
          "Крутой Замок Golden Soft для ресторанта Крутой Замок Golden Soft для ресторанта Крутой Замок Golden Soft для ресторанта Крутой Замок Golden Soft для ресторанта",
        aLot2:
          "Крутой Замок Golden Soft для ресторанта Крутой Замок Golden Soft для ресторанта Крутой Замок Golden Soft для ресторанта",
      },
      {
        id: 7,
        topImg: "./images/office.png",
        title: "Вариативный замок Golden Soft для отеля",
        discountPrice: 17000,
        realPrice: "8 000₽",
        categories: ["Ishga", "Eski", "Популярности"],
        hasIsCard: false,
        aLot1:
          "Вариативный замок Golden Soft для отеля Вариативный замок Golden Soft для отеля Вариативный замок Golden Soft для отеля Вариативный замок Golden Soft для отеля",
        aLot2:
          "Вариативный замок Golden Soft для отеля Вариативный замок Golden Soft для отеля Вариативный замок Golden Soft для отеля",
      },
      {
        id: 8,
        topImg: "./images/for-me.png",
        title: "Дверной Замок Golden Soft для офиса",
        discountPrice: 3000,
        realPrice: "39 809₽",
        categories: ["Ishga", "Популярности"],
        hasIsCard: false,
        aLot1:
          "Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса",
        aLot2:
          "Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса",
      },
      {
        id: 9,
        topImg: "./images/for-children.png",
        title: "Крутой Замок Golden Soft для ресторанта",
        discountPrice: 1000,
        realPrice: "12 000₽",
        categories: ["Eski", "Популярности"],
        hasIsCard: false,
        aLot1:
          "Крутой Замок Golden Soft для ресторанта Крутой Замок Golden Soft для ресторанта Крутой Замок Golden Soft для ресторанта Крутой Замок Golden Soft для ресторанта",
        aLot2:
          "Крутой Замок Golden Soft для ресторанта Крутой Замок Golden Soft для ресторанта Крутой Замок Golden Soft для ресторанта",
      },
      {
        id: 10,
        topImg: "./images/office.png",
        title: "Вариативный замок Golden Soft для отеля",
        discountPrice: 7000,
        realPrice: "8 000₽",
        categories: ["Ishga", "Eski", "Популярности"],
        hasIsCard: false,
        aLot1:
          "Вариативный замок Golden Soft для отеля Вариативный замок Golden Soft для отеля Вариативный замок Golden Soft для отеля Вариативный замок Golden Soft для отеля",
        aLot2:
          "Вариативный замок Golden Soft для отеля Вариативный замок Golden Soft для отеля Вариативный замок Golden Soft для отеля",
      },
      {
        id: 11,
        topImg: "./images/for-me.png",
        title: "Дверной Замок Golden Soft для офиса",
        discountPrice: 33000,
        realPrice: "39 809₽",
        categories: ["Yangi", "Ishga", "Популярности"],
        hasIsCard: true,
        aLot1:
          "Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса",
        aLot2:
          "Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса",
      },
      {
        id: 12,
        topImg: "./images/for-children.png",
        title: "Крутой Замок Golden Soft для ресторанта",
        discountPrice: 9000,
        realPrice: "12 000₽",
        categories: ["Yangi", "Ishga", "Eski", "Популярности"],
        aLot: "Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса",
        aLot2:
          "Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса Дверной Замок Golden Soft для офиса",
        hasIsCard: true,
      },
    ];
// localStorage.setItem("products", JSON.stringify(products));

const categories = ["Yangi", "Ishga", "Eski", "Популярности"];

const elWrapper = findElement(".hero-right");
const newTem = findElement("#template");
const startValInp = findElement(".inp1");
const endValInp = findElement(".inp2");
const elCatigories = findElement(".reminder-right-select");
const elForm = findElement(".hero-left-inps");
const deleate = findElement(".reminder-left-end-buton");

elForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const maxVal = Number(endValInp.value);
  const minVal = Number(startValInp.value);
  const newArr = products.filter((item) => {
    const price = Number(item.discountPrice);
    console.log(price);
    return minVal < price && price < maxVal;
  });
  createCards(newArr);
});

deleate.addEventListener("click", () => {
  startValInp.value = null;
  endValInp.value = null;
  createCards(products);
});

elCatigories.addEventListener("change", () => {
  const filteredArray = products.filter((item) =>
    item.categories.includes(elCatigories.value)
  );

  createCards(filteredArray);
});

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
    const isCard = findElement(".card", newEl);

    addToCard.dataset.id = item.id;
    isCard.dataset.id = item.id;
    topImg.src = item.topImg;
    topImg.dataset.id = item.id;
    title.textContent = item.title;
    realPrice.textContent = item.realPrice;
    discountPrice.textContent = item.discountPrice;

    if (item.hasIsCard) {
      isCard.src = "./images/iscardeed.png";
      isCard.style.width = "29px";
      isCard.style.height = "29px";
    } else {
      isCard.src = "./images/Button.svg";
    }
    elWrapper.appendChild(newEl);
  });
}
createCards(products);

elWrapper.addEventListener("click", (evt) => {
  if (evt.target.className.includes("hero-right-one-center-img")) {
    const id = evt.target.dataset.id;
    localStorage.setItem("id", id);
    localStorage.setItem("products", JSON.stringify(products));
  }
  if (evt.target.className.includes("card")) {
    const id = Number(evt.target.dataset.id);
    console.log(id);
    products.forEach((item) => {
      if (item.id == id) {
        item.hasIsCard = !item.hasIsCard;
      }
    });
    localStorage.setItem("products", JSON.stringify(products));
    createCards(products);
  }
});
