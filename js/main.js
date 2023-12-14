let allLis = document.querySelectorAll("ul li");
let homeLi = document.querySelector(".home-icon");
let aboutLi = document.querySelector(".about-icon");
let clintLi = document.querySelector(".clint-icon");
let contactLi = document.querySelector(".contact-icon");

allLis.forEach((ele) => {
  ele.addEventListener("click", function () {
    allLis.forEach((ele) => {
      ele.classList.remove("active");
    });
    this.classList.add("active");
  });
});

window.onscroll = function () {
  if (this.scrollY < 600) {
    allLis.forEach((ele) => {
      ele.classList.remove("active");
      homeLi.classList.add("active");
    });
  } else if (this.scrollY > 600 && this.scrollY < 1250) {
    allLis.forEach((ele) => {
      ele.classList.remove("active");
      aboutLi.classList.add("active");
    });
  } else if (this.scrollY > 1250 && this.scrollY < 1800) {
    allLis.forEach((ele) => {
      ele.classList.remove("active");
      clintLi.classList.add("active");
    });
  } else if (this.scrollY > 1800) {
    allLis.forEach((ele) => {
      ele.classList.remove("active");
      contactLi.classList.add("active");
    });
  }
};
