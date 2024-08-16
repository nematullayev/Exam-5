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

const newTem = document.querySelector("#template");
const elWrapper = document.querySelector(".wrapp");

function createCards() {
  elWrapper.textContent = null;
  const filteredProducts = products.filter((item) => item.hasIsCard);

  let createCards = filteredProducts.map((item) => {
    const newEl = newTem.content.cloneNode(true);

    const topImg = findElement(".hero-right-one-center-img", newEl);
    const title = findElement(".hero-right-one-title-tit", newEl);
    const elDeleate = findElement(".deleate", newEl);

    const discountPrice = findElement(
      ".hero-right-one-prices-discount-value",
      newEl
    );

    elDeleate.dataset.id = item.id;
    topImg.src = item.topImg;
    topImg.dataset.id = item.id;
    title.textContent = item.title;
    discountPrice.textContent = item.discountPrice;

    elWrapper.appendChild(newEl);
  });
}
createCards(products);
elWrapper.addEventListener("click", (evt) => {
  if (evt.target.className.includes("deleate")) {
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
