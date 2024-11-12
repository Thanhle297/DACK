const listImage = document.querySelector(".img-list");
const image = document.getElementsByClassName("img-banner");
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const length = image.length;
let current = 0;

const handlechangesildeshow = () => {
  let width = image[0].offsetWidth;
  if (current === length - 1) {
    current = 0;
    listImage.style.transform = "translateX(0px)";
    document.querySelector(".active").classList.remove("active");
    document.querySelector(".index-item-" + current).classList.add("active");
  } else {
    current++;
    listImage.style.transform = `translateX(${width * -1 * current}px)`;
    document.querySelector(".active").classList.remove("active");
    document.querySelector(".index-item-" + current).classList.add("active");
  }
};
let handleEventchangeslide = setInterval(handlechangesildeshow, 4000);

btnRight.addEventListener("click", () => {
  clearInterval(handleEventchangeslide);
  handlechangesildeshow();
  handleEventchangeslide = setInterval(handlechangesildeshow, 4000);
});

btnLeft.addEventListener("click", () => {
  clearInterval(handleEventchangeslide);
  let width = image[0].offsetWidth;
  if (current === 0) {
    current = length - 1;
    listImage.style.transform = `translateX(${width * -1 * current}px)`;
    document.querySelector(".active").classList.remove("active");
    document.querySelector(".index-item-" + current).classList.add("active");
  } else {
    current--;
    listImage.style.transform = `translateX(${width * -1 * current}px)`;
    document.querySelector(".active").classList.remove("active");
    document.querySelector(".index-item-" + current).classList.add("active");
  }
  handleEventchangeslide = setInterval(handlechangesildeshow, 4000);
});
