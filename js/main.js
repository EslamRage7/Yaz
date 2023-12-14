let allLis = document.querySelectorAll("ul li");
let homeLi = document.querySelector(".home-icon");
let aboutLi = document.querySelector(".about-icon");
let clintLi = document.querySelector(".clint-icon");
let contactLi = document.querySelector(".contact-icon");

window.onscroll = function () {
  if (this.scrollY < 450) {
    allLis.forEach((ele) => {
      ele.classList.remove("active");
      homeLi.classList.add("active");
    });
  } else if (this.scrollY > 450 && this.scrollY < 1180) {
    allLis.forEach((ele) => {
      ele.classList.remove("active");
      aboutLi.classList.add("active");
    });
  } else if (this.scrollY > 1180 && this.scrollY < 1650) {
    allLis.forEach((ele) => {
      ele.classList.remove("active");
      clintLi.classList.add("active");
    });
  } else if (this.scrollY > 1650) {
    allLis.forEach((ele) => {
      ele.classList.remove("active");
      contactLi.classList.add("active");
    });
  }
};
