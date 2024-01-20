const leftbtn = document.querySelector(".l-btn");
const rightbtn = document.querySelector(".r-btn");

rightbtn.addEventListener("click", function (event) {
  const content = document.querySelector(".product-slide");
  content.scrollLeft += 1100;
  event.preventDefault();
});
leftbtn.addEventListener("click", function (event) {
  const content = document.querySelector(".product-slide");
  content.scrollLeft -= 1100;
  event.preventDefault();
});

// slide sec-3
const leftbtn1 = document.querySelector(".btn-1b");
const rightbtn2 = document.querySelector(".btn-1a");

rightbtn2.addEventListener("click", function (event) {
  const content = document.querySelector(".product-slide-1");
  content.scrollLeft += 1100;
  event.preventDefault();
});
leftbtn1.addEventListener("click", function (event) {
  const content = document.querySelector(".product-slide-1");
  content.scrollLeft -= 1100;
  event.preventDefault();
});
// slide sec-4
const leftbtn3 = document.querySelector(".btn-2b");
const rightbtn4 = document.querySelector(".btn-2a");

rightbtn4.addEventListener("click", function (event) {
  const content = document.querySelector(".product-slide-2");
  content.scrollLeft += 1100;
  event.preventDefault();
});
leftbtn3.addEventListener("click", function (event) {
  const content = document.querySelector(".product-slide-2");
  content.scrollLeft -= 1100;
  event.preventDefault();
});

// slide sec-7

const leftbtn4 = document.querySelector(".btn-3b");
const rightbtn5 = document.querySelector(".btn-3a");

rightbtn5.addEventListener("click", function (event) {
  const content = document.querySelector(".product-slide-3");
  content.scrollLeft += 1100;
  event.preventDefault();
});
leftbtn4.addEventListener("click", function (event) {
  const content = document.querySelector(".product-slide-3");
  content.scrollLeft -= 1100;
  event.preventDefault();
});

// back to top
const backtop = document.querySelector(".backtop");

backtop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// sidebar

const sidebar=document.querySelector(".sidebar")
const cross=document.querySelector(".fa-xmark")
const black=document.querySelector(".black")
const sidebtn = document.querySelector(".second-1")

sidebtn.addEventListener("click", () => {
    sidebar.classList.add("active")
    cross.classList.add("active")
    black.classList.add("active")
   document.body.classList.add("stop-scroll")
})

cross.addEventListener("click", () => {
    sidebar.classList.remove("active")
    cross.classList.remove("active")
    black.classList.remove("active")
})


// dropdown account
const sign= document.querySelector(".ac")
const tri= document.querySelector(".triangle")
const signin = document.querySelector(".hdn-sign")

sign.addEventListener("click", () => {
    black.classList.toggle("active-1")
    signin.classList.toggle("active")
    tri.classList.toggle("active")
})