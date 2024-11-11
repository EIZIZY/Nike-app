const wrapper = document.querySelector(".sliderwrapper");
const menuitem = document.querySelectorAll(".menu");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./media/air.png",
      },
      {
        code: "darkblue",
        img: "./media/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./media/jordan.png",
      },
      {
        code: "green",
        img: "./media/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./media/blazer.png",
      },
      {
        code: "green",
        img: "./media/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "media/crater.png",
      },
      {
        code: "lightgray",
        img: "media/crater2.png",
      },
    ],
  },
];

let choose = products[0];
const currentimg = document.querySelector(".productimg");
const currenttitle = document.querySelector(".producttitle");
const currentprice = document.querySelector(".productprice");
const currentcolor = document.querySelectorAll(".color");
const currentsize = document.querySelectorAll(".size");

menuitem.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    choose = products[index];

    currenttitle.textContent = choose.title;
    currentprice.textContent = "$" + choose.price;
    currentimg.src = choose.colors[0].img;
    currentcolor.forEach((color, index) => {
      color.style.backgroundColor = choose.colors[index].code;
    });
  });
});

currentcolor.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentimg.src = choose.colors[index].img;
  });
});

currentsize.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentsize.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productbutton = document.querySelector(".productbutton");
const payment = document.querySelector(".payment");
const closebtn = document.querySelector(".close");

productbutton.addEventListener("click", () => {
  payment.style.display = "flex";
});

closebtn.addEventListener("click", () => {
  payment.style.display = "none";
});
